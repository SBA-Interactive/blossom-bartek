import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  BOTTLE_OPTIONS,
  SIZE_OPTIONS,
  SCENT_OPTIONS,
  PACKAGING_OPTIONS,
} from "@/constants/configurator";

export default function ConfiguratorPage() {
  const [selectedBottle, setSelectedBottle] = useState(BOTTLE_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZE_OPTIONS[1]);
  const [selectedScents, setSelectedScents] = useState<{ top: string[]; heart: string[]; base: string[] }>({
    top: [],
    heart: [],
    base: [],
  });
  const [selectedPackaging, setSelectedPackaging] = useState(PACKAGING_OPTIONS[0]);
  const [customMessage, setCustomMessage] = useState("");

  const toggleScent = (category: 'top' | 'heart' | 'base', note: string) => {
    setSelectedScents(prev => {
      const current = prev[category];
      if (current.includes(note)) {
        return { ...prev, [category]: current.filter(n => n !== note) };
      }
      if (current.length >= 3) return prev;
      return { ...prev, [category]: [...current, note] };
    });
  };


  const OptionGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-6 lg:mb-8">
      <h3 className="text-xl lg:text-2xl font-heading font-semibold mb-3 lg:mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-2 lg:gap-4">
        {children}
      </div>
    </div>
  );

  const OptionButton = ({ selected, onClick, children }: { selected: boolean, onClick: () => void, children: React.ReactNode }) => (
    <Button 
      variant={selected ? "default" : "outline"} 
      className={cn(
        "h-auto p-2 lg:p-4 text-sm lg:text-base flex flex-col items-center justify-center gap-1 lg:gap-2 transition-all duration-200 touch-manipulation",
        "border-2 min-h-[60px]",
        selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return (
    <main className="pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side: Visuals */}
          <div className="lg:sticky lg:top-24 lg:self-start order-2 lg:order-1">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-square lg:aspect-[1/1] bg-muted flex items-center justify-center p-4 lg:p-8 relative">
                  <img 
                    src={selectedPackaging.image} 
                    alt={selectedPackaging.name} 
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300"
                    key={`${selectedPackaging.id}-bg`}
                  />
                  <img 
                    src={selectedBottle.image} 
                    alt={selectedBottle.name} 
                    className="relative z-10 h-2/3 lg:h-3/4 max-h-[200px] lg:max-h-[400px] transition-transform duration-300"
                    key={selectedBottle.id}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-left bg-background/50 backdrop-blur-sm p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Your Configuration</h3>
                <ul className="text-muted-foreground space-y-2">
                    <li className="flex justify-between"><span>Bottle:</span> <span className="font-medium text-foreground">{selectedBottle.name}</span></li>
                    <li className="flex justify-between"><span>Size:</span> <span className="font-medium text-foreground">{selectedSize.name}</span></li>
                    <li className="flex justify-between"><span>Scent:</span> <span className="font-medium text-foreground truncate">{[...selectedScents.top, ...selectedScents.heart, ...selectedScents.base].join(', ')}</span></li>
                    <li className="flex justify-between"><span>Packaging:</span> <span className="font-medium text-foreground">{selectedPackaging.name}</span></li>
                    {customMessage && <li className="flex justify-between items-start"><span>Message:</span><span className="font-medium text-foreground text-right pl-4">"{customMessage}"</span></li>}
                </ul>
                <p className="text-4xl font-bold mt-6 text-right">€129.99</p>
            </div>
            <div className="mt-6">
                <Button size="xl" className="w-full p-8 text-2xl font-bold">Add to Cart</Button>
            </div>
          </div>

          {/* Right Side: Options */}
          <div className="order-1 lg:order-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 lg:mb-8">
              Create Your Scent
            </h1>

            <OptionGroup title="1. Choose Your Bottle">
              {BOTTLE_OPTIONS.map(bottle => (
                <OptionButton key={bottle.id} selected={selectedBottle.id === bottle.id} onClick={() => setSelectedBottle(bottle)}>
                  <img src={bottle.image} alt={bottle.name} className="h-16 lg:h-24 w-auto max-w-full" />
                  <span className="text-xs lg:text-sm text-foreground">{bottle.name}</span>
                </OptionButton>
              ))}
            </OptionGroup>

            <OptionGroup title="2. Select Size">
              {SIZE_OPTIONS.map(size => (
                <OptionButton key={size.id} selected={selectedSize.id === size.id} onClick={() => setSelectedSize(size)}>
                  <span className="text-lg lg:text-2xl font-semibold text-foreground">{size.name}</span>
                </OptionButton>
              ))}
            </OptionGroup>
            
            <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-heading font-semibold mb-3 lg:mb-4">3. Compose Your Scent</h3>
                <div className="space-y-4 lg:space-y-6">
                    <div>
                        <h4 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">Top Note (up to 3)</h4>
                        <div className="flex flex-wrap gap-1.5 lg:gap-2">
                            {SCENT_OPTIONS.top.map(note => (
                                <Button className="text-xs lg:text-base p-1.5 lg:p-3 h-auto touch-manipulation" key={note} variant={selectedScents.top.includes(note) ? 'default' : 'outline'} onClick={() => toggleScent('top', note)}>{note}</Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">Heart Note (up to 3)</h4>
                        <div className="flex flex-wrap gap-1.5 lg:gap-2">
                            {SCENT_OPTIONS.heart.map(note => (
                                <Button className="text-xs lg:text-base p-1.5 lg:p-3 h-auto touch-manipulation" key={note} variant={selectedScents.heart.includes(note) ? 'default' : 'outline'} onClick={() => toggleScent('heart', note)}>{note}</Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3">Base Note (up to 3)</h4>
                        <div className="flex flex-wrap gap-1.5 lg:gap-2">
                            {SCENT_OPTIONS.base.map(note => (
                                <Button className="text-xs lg:text-base p-1.5 lg:p-3 h-auto touch-manipulation" key={note} variant={selectedScents.base.includes(note) ? 'default' : 'outline'} onClick={() => toggleScent('base', note)}>{note}</Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <OptionGroup title="4. Select Packaging">
              {PACKAGING_OPTIONS.map(pack => (
                <OptionButton key={pack.id} selected={selectedPackaging.id === pack.id} onClick={() => setSelectedPackaging(pack)}>
                  <img src={pack.image} alt={pack.name} className="h-16 lg:h-24 w-auto max-w-full" />
                  <span className="text-xs lg:text-sm text-foreground">{pack.name}</span>
                </OptionButton>
              ))}
            </OptionGroup>
            
            <div className="mb-6 lg:mb-8">
              <h3 className="text-xl lg:text-2xl font-heading font-semibold mb-3 lg:mb-4">5. Add a Custom Message</h3>
              <Textarea 
                placeholder="Happy Birthday, Sarah!" 
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="text-base lg:text-lg bg-background"
                rows={3}
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}


