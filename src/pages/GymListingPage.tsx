import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BusinessMeta } from '@/components/business/BusinessMeta';
import { FitnessHighlightCard } from '@/components/business/FitnessHighlightCard';
import { VerificationBadge } from '@/components/business/VerificationBadge';
import { TrainerGrid } from '@/components/business/TrainerGrid';
import { PricingPlanGrid } from '@/components/business/PricingPlanGrid';
import { TodayClassesCard } from '@/components/business/TodayClassesCard';
import { BusinessInfoCard } from '@/components/business/BusinessInfoCard';
import { BusinessHoursCard } from '@/components/business/BusinessHoursCard';
import { EquipmentFeaturesCard } from '@/components/business/EquipmentFeaturesCard';
import { LastUpdatedStamp } from '@/components/business/LastUpdatedStamp';
import {
  gymAddressLines,
  gymCapacity,
  gymClasses,
  gymDetails,
  gymHighlights,
  gymHours,
  gymLastUpdated,
  gymPhone,
  gymPricingPlans,
  gymTrainers,
  gymWebsite,
} from '@/data/gymMock';
import { Dumbbell, MapPin, Phone, Route, ShieldCheck, Users } from 'lucide-react';

export function GymListingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-4 px-4 py-6 lg:py-8">
      <nav className="text-xs text-muted-foreground">
        <span className="text-muted-foreground/80">Home</span>
        <span className="mx-1">/</span>
        <span className="text-muted-foreground/80">Fitness &amp; Health</span>
        <span className="mx-1">/</span>
        <span className="text-muted-foreground/80">Gyms &amp; Studios</span>
        <span className="mx-1">/</span>
        <span className="font-semibold text-foreground">{gymDetails.name}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <main className="space-y-6">
          <Card className="overflow-hidden shadow-md">
            <div className="relative h-80 bg-muted">
              <img
                src={gymDetails.heroImage}
                alt={gymDetails.name}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index === 0
                        ? 'h-2 w-2 rounded-full bg-white'
                        : 'h-2 w-2 rounded-full bg-white/40'
                    }
                  />
                ))}
              </div>
            </div>
            <CardContent className="space-y-4 pt-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <h1 className="text-h1 font-semibold text-foreground">{gymDetails.name}</h1>
                  <p className="text-small font-medium text-muted-foreground">
                    {gymDetails.categories}
                  </p>
                </div>
                <VerificationBadge
                  label="Certified Affiliate"
                  icon={<ShieldCheck className="h-4 w-4" />}
                  className="self-start"
                />
              </div>

              <BusinessMeta
                rating={gymDetails.rating}
                reviewCount={gymDetails.reviewCount}
                distance={gymDetails.distance}
                openStatus={gymDetails.openStatus}
                spotsLeft={gymDetails.spotsLeft}
                className="flex-wrap gap-4"
              />

              <p className="text-body text-muted-foreground">
                {gymDetails.description}
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {gymHighlights.map((highlight) => (
                  <FitnessHighlightCard
                    key={highlight.title}
                    icon={getIconComponent(highlight.icon)}
                    title={highlight.title}
                    description={highlight.description}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" className="gap-2">
                  <CalendarDaysIcon />
                  <span>Book Free Trial</span>
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Route className="h-4 w-4" />
                  <span>Get Directions</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <section className="space-y-4">
            <header className="flex items-center gap-2">
              <Users className="h-5 w-5 text-destructive" />
              <h2 className="text-h2 font-semibold text-foreground">Meet Our Coaches</h2>
            </header>
            <TrainerGrid trainers={gymTrainers} />
          </section>

          <section className="space-y-4">
            <header className="flex items-center gap-2">
              <CreditCardIcon />
              <h2 className="text-h2 font-semibold text-foreground">Membership Options</h2>
            </header>
            <PricingPlanGrid plans={gymPricingPlans} />
          </section>
        </main>

        <aside className="space-y-4">
          <TodayClassesCard classes={gymClasses} />
          <BusinessInfoCard
            addressLines={gymAddressLines}
            phone={gymPhone}
            website={gymWebsite}
            capacity={gymCapacity}
          />
          <BusinessHoursCard hours={gymHours} />
          <EquipmentFeaturesCard
            features={[
              { icon: <Dumbbell className="h-4 w-4" />, label: 'Olympic Lifting' },
              { icon: <Users className="h-4 w-4" />, label: 'Cardio Machines' },
              { icon: <MapPin className="h-4 w-4" />, label: 'Pull-up Rigs' },
              { icon: <Dumbbell className="h-4 w-4" />, label: 'Kettlebells' },
              { icon: <Dumbbell className="h-4 w-4" />, label: 'Plyometric Boxes' },
              { icon: <Dumbbell className="h-4 w-4" />, label: 'Battle Ropes' },
            ]}
          />
          <LastUpdatedStamp text={gymLastUpdated} />
        </aside>
      </div>
    </div>
  );
}


function CalendarDaysIcon() {
  return <CalendarDays className="h-4 w-4" />;
}

}



function CreditCardIcon() {
  return <CreditCard className="h-5 w-5 text-destructive" />;
}

