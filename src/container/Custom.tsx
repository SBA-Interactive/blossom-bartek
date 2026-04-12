import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { BOTTLE_SIZES, SCENT_NOTES, getScentNotesByCategory, ScentNote } from "@/constants/product";
import { useCartStore } from "@/store/useCartStore";
import { useSubscriptionStore } from "@/store/useSubscriptionStore";
import { TOAST_LONG_DURATION } from "@/constants/timeouts";
import {
  BLUR_FADE_DELAY_SHORT,
  BLUR_FADE_DELAY_MEDIUM,
  BLUR_FADE_DELAY_LONG,
} from "@/constants/animation";
import { PRICE_DISCOUNT_MULTIPLIER, PRICE_PARTIAL_DISCOUNT_MULTIPLIER } from "@/constants/calculations";
import { Leaf, ShoppingBag, Droplets, Sparkles, RotateCcw, Check } from "lucide-react";

interface CustomBlend {
  topNotes: ScentNote[];
  heartNotes: ScentNote[];
  baseNotes: ScentNote[];
  bottleSize: string;
  name: string;
}

const BASE_PRICE_PER_ML = 1.5;

function ScentSelector({
  title,
  notes,
  selected,
  onToggle,
}: {
  title: string;
  notes: ScentNote[];
  selected: ScentNote[];
  onToggle: (note: ScentNote) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
        {title}
        <Badge variant="outline" className="text-xs">
          {selected.length}/3
        </Badge>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {notes.map((note) => {
          const isSelected = selected.some((s) => s.id === note.id);
          return (
            <button
              key={note.id}
              onClick={() => onToggle(note)}
              className={`p-3 rounded-lg border text-left transition-all hover:shadow-md ${
                isSelected
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm">{note.name}</span>
                {isSelected && <Check className="w-4 h-4 text-primary" />}
              </div>
              <span className="block text-xs text-muted-foreground mt-1">
                {note.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BottleSizeSelector({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
        Bottle Size
        <Badge variant="outline" className="text-xs">
          Required
        </Badge>
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {BOTTLE_SIZES.map((size) => (
          <button
            key={size.id}
            onClick={() => onSelect(size.id)}
            className={`p-4 rounded-lg border text-center transition-all hover:shadow-md ${
              selected === size.id
                ? "border-primary bg-primary/10 shadow-md"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="font-heading font-bold text-lg mb-1">{size.label}</div>
            <div className="text-sm text-muted-foreground">
              €{Math.round(BASE_PRICE_PER_ML * size.ml * PRICE_DISCOUNT_MULTIPLIER)} total
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              €{(BASE_PRICE_PER_ML * size.ml * PRICE_DISCOUNT_MULTIPLIER).toFixed(2)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CustomPage() {
  const [blend, setBlend] = useState<CustomBlend>({
    topNotes: [],
    heartNotes: [],
    baseNotes: [],
    bottleSize: "30ml",
    name: "",
  });
  const [notification, setNotification] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);
  const [customName, setCustomName] = useState("");

  const addCustomItem = useCartStore((state) => state.addCustomItem);
  const { applyDiscount, getDiscount, currentTier } = useSubscriptionStore();

  const topNotes = useMemo(() => getScentNotesByCategory("top"), []);
  const heartNotes = useMemo(() => getScentNotesByCategory("heart"), []);
  const baseNotes = useMemo(() => getScentNotesByCategory("base"), []);

  const totalNotes = blend.topNotes.length + blend.heartNotes.length + blend.baseNotes.length;
  const isComplete = totalNotes >= 3 && blend.bottleSize;

  const price = useMemo(() => {
    const size = BOTTLE_SIZES.find((s) => s.id === blend.bottleSize);
    if (!size) return 0;
    let basePrice = BASE_PRICE_PER_ML * size.ml;
    if (totalNotes >= 6) basePrice *= PRICE_DISCOUNT_MULTIPLIER;
    else if (totalNotes >= 3) basePrice *= PRICE_PARTIAL_DISCOUNT_MULTIPLIER;
    return applyDiscount(basePrice);
  }, [blend.bottleSize, totalNotes, applyDiscount]);

  const toggleNote = (note: ScentNote, category: "topNotes" | "heartNotes" | "baseNotes") => {
    const current = blend[category];
    const isSelected = current.some((n) => n.id === note.id);

    if (isSelected) {
      setBlend((prev) => ({
        ...prev,
        [category]: current.filter((n) => n.id !== note.id),
      }));
    } else if (current.length < 3) {
      setBlend((prev) => ({
        ...prev,
        [category]: [...current, note],
      }));
    }
  };

  const resetBlend = () => {
    setBlend({
      topNotes: [],
      heartNotes: [],
      baseNotes: [],
      bottleSize: "30ml",
      name: "",
    });
    setCustomName("");
  };

  const handleAddToCart = () => {
    const finalName = customName || `Custom Blend (${blend.topNotes.map(n => n.name).join(", ")})`;
    const sizeLabel = BOTTLE_SIZES.find(s => s.id === blend.bottleSize)?.label || blend.bottleSize;
    const customBlendObj = {
      topNotes: blend.topNotes.map(n => ({ id: n.id, name: n.name })),
      heartNotes: blend.heartNotes.map(n => ({ id: n.id, name: n.name })),
      baseNotes: blend.baseNotes.map(n => ({ id: n.id, name: n.name })),
    };
    
    addCustomItem(finalName, price, sizeLabel, customBlendObj);
    setNotification(`${finalName} added to cart - €${price.toFixed(2)}`);
    setTimeout(() => setNotification(""), TOAST_LONG_DURATION);
  };

  return (
    <>
      <main className="pt-24 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <BlurFade inView>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <Badge variant="default">Custom</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Create Your Custom Blend
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mix your own signature fragrance by selecting top, heart, and base notes. 
                The more notes you combine, the better the price!
              </p>
            </div>
          </BlurFade>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <BlurFade delay={BLUR_FADE_DELAY_SHORT} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      Step 1: Choose Your Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ScentSelector
                      title="Top Notes (First Impression)"
                      notes={topNotes}
                      selected={blend.topNotes}
                      onToggle={(note) => toggleNote(note, "topNotes")}
                    />
                    <Separator />
                    <ScentSelector
                      title="Heart Notes (The Core)"
                      notes={heartNotes}
                      selected={blend.heartNotes}
                      onToggle={(note) => toggleNote(note, "heartNotes")}
                    />
                    <Separator />
                    <ScentSelector
                      title="Base Notes (The Lasting Memory)"
                      notes={baseNotes}
                      selected={blend.baseNotes}
                      onToggle={(note) => toggleNote(note, "baseNotes")}
                    />
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY_MEDIUM} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-primary" />
                      Step 2: Choose Bottle Size
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BottleSizeSelector
                      selected={blend.bottleSize}
                      onSelect={(id) => setBlend((prev) => ({ ...prev, bottleSize: id }))}
                    />
                  </CardContent>
                </Card>
              </BlurFade>
            </div>

            <div className="lg:sticky lg:top-24 h-fit">
              <BlurFade delay={BLUR_FADE_DELAY_LONG} inView>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Your Custom Blend</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{totalNotes}</span> notes selected
                      {totalNotes < 3 && (
                        <Badge variant="destructive" className="ml-2">
                          Min 3 required
                        </Badge>
                      )}
                    </div>

                    {blend.topNotes.length > 0 && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase">Top</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {blend.topNotes.map((n) => (
                            <Badge key={n.id} variant="secondary" className="text-xs">
                              {n.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {blend.heartNotes.length > 0 && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase">Heart</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {blend.heartNotes.map((n) => (
                            <Badge key={n.id} variant="secondary" className="text-xs">
                              {n.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {blend.baseNotes.length > 0 && (
                      <div>
                        <span className="text-xs text-muted-foreground uppercase">Base</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {blend.baseNotes.map((n) => (
                            <Badge key={n.id} variant="secondary" className="text-xs">
                              {n.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <Separator />

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name Your Blend (Optional)</label>
                      <input
                        type="text"
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        placeholder="My Signature Scent"
                        className="w-full p-2 rounded-lg border border-input bg-background"
                      />
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center text-lg">
                      <span className="font-medium">Total</span>
                      <span className="font-heading font-bold text-2xl text-primary">
                        €{price.toFixed(2)}
                      </span>
                    </div>

                    {currentTier !== "free" && (
                      <div className="text-xs text-muted-foreground text-center">
                        {getDiscount()}% subscription discount applied
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground">
                      {totalNotes >= 6 && (
                        <span className="text-green-600">20% bundle discount applied!</span>
                      )}
                      {totalNotes >= 3 && totalNotes < 6 && (
                        <span>10% multi-note discount applied!</span>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Button
                        size="lg"
                        className="w-full"
                        disabled={!isComplete}
                        onClick={handleAddToCart}
                      >
                        <ShoppingBag className="mr-2 w-5 h-5" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full"
                        onClick={resetBlend}
                      >
                        <RotateCcw className="mr-2 w-4 h-4" />
                        Start Over
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </main>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
    </>
  );
}