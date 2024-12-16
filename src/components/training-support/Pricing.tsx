import { CheckIcon } from "lucide-react";
import GradientTitle from "../common/GradientTitle";

export function Pricing() {
  return (
    <section className="overflow-hidden py-24  text-neutral-800 dark:text-neutral-50 lg:pb-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <GradientTitle text="Training"/>
        </div>
        <div className="-m-6 flex flex-wrap *:mx-auto">
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div className="h-full transform-gpu rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900 ">
              <div className="border-b border-neutral-300 p-12 dark:border-neutral-600">
                <div className="pr-9">
                  <h4 className="mb-6 text-5xl tracking-tighter">Basic</h4>
                  
                </div>
              </div>
              <div className="p-5 pb-11">
                <ul className="-m-1.5 mb-11 flex flex-col">
                  <FeatureItem>PENGENALAN LAYANAN</FeatureItem>
                  <FeatureItem>PENGENALAN MATERIAL & BAHAN </FeatureItem>
                  <FeatureItem>OBSERVASI MASALAH</FeatureItem>
                  <FeatureItem>LEATHER TREATMENT</FeatureItem>
                  <FeatureItem>UN-YELLOWING</FeatureItem>
                  <FeatureItem>
                    TEHNIK PENCUCIAN CANVAS, SUEDE, NUBUCK, WOVEN
                  </FeatureItem>
                </ul>
                <PricingButton noCardRequired={true}>
                  Hubungi Sekarang
                </PricingButton>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div
              className="transform-gpu overflow-hidden rounded-2xl p-px transition duration-500 hover:-translate-y-2"
              style={{
                backgroundImage:
                  "url('/images/training-support/advanced-gradient.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="h-full rounded-2xl bg-white dark:bg-neutral-900">
                <div
                  className="p-12"
                  style={{
                    backgroundImage:
                      "url('/images/training-support/advanced-gradient.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="pr-9">
                    <h4 className="mb-6 text-5xl tracking-tighter text-white">
                      Advance +
                    </h4>
                   
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <ul className="-m-1.5 mb-11">
                    <FeatureItem>PENGENALAN LAYANAN</FeatureItem>
                    <FeatureItem>PENGENALAN MATERIAL & BAHAN</FeatureItem>
                    <FeatureItem>OBSERVASI MASALAH</FeatureItem>
                    <FeatureItem>LEATHER TREATMENT</FeatureItem>
                    <FeatureItem>RE-WHITENING</FeatureItem>
                    <FeatureItem>UN-YELLOWING</FeatureItem>
                    <FeatureItem>RE-COLOR & RE-PAINT</FeatureItem>
                    <FeatureItem>RE-GLUE</FeatureItem>
                    <FeatureItem>PENGELOLAAN KARYAWAN</FeatureItem>
                    <FeatureItem>CUSTOMER HANDLING</FeatureItem>
                    <FeatureItem>MARKETING & PROMOSI</FeatureItem>
                    <FeatureItem>TEORI & PRAKTEK MENCUCI BABY GEAR</FeatureItem>
                    <FeatureItem>
                      MENGHILANGKAN NODA JAMUR / KARAT / DARAH
                    </FeatureItem>
                    <FeatureItem>
                      TEHNIK PENCUCIAN CANVAS, SUEDE, NUBUCK, WOVEN
                    </FeatureItem>
                  </ul>
                  <PricingButton noCardRequired={true}>
                    Hubungi Sekarang
                  </PricingButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-1/3">
            <div className="h-full transform-gpu rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900 ">
              <div className="border-b border-neutral-300 p-12 dark:border-neutral-600">
                <div className="pr-9">
                  <h4 className="mb-6 text-5xl tracking-tighter">Advance</h4>
                </div>
              </div>
              <div className="p-12 pb-11">
                <ul className="-m-1.5 mb-11 flex flex-col">
                <FeatureItem>PENGENALAN LAYANAN</FeatureItem>
                    <FeatureItem>PENGENALAN MATERIAL & BAHAN</FeatureItem>
                    <FeatureItem>OBSERVASI MASALAH</FeatureItem>
                    <FeatureItem>LEATHER TREATMENT</FeatureItem>
                    <FeatureItem>RE-WHITENING</FeatureItem>
                    <FeatureItem>UN-YELLOWING</FeatureItem>
                    <FeatureItem>RE-COLOR & RE-PAINT</FeatureItem>
                    <FeatureItem>RE-GLUE</FeatureItem>
                    <FeatureItem>TEORI & PRAKTEK MENCUCI BABY GEAR</FeatureItem>
                    <FeatureItem>MENGHILANGKAN NODA JAMUR / KARAT / DARAH</FeatureItem>
                    <FeatureItem>TEHNIK PENCUCIAN CANVAS, SUEDE, NUBUCK, WOVEN</FeatureItem>

                </ul>
                <PricingButton noCardRequired={true}>
                  Hubungi Sekarang
                </PricingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center justify-start py-1.5">
      <CheckIcon className="mr-2 h-4 w-8" />
      <span className="font-medium tracking-tight">{children}</span>
    </li>
  );
};

const PricingButton = ({
  children,
  href,

  noCardRequired,
}: {
  children: string;
  href?: string;
  noCardRequired?: boolean;
}) => {
  return (
    <>
      <a
        className="inline-block w-full rounded-lg border border-neutral-700  bg-transparent px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800"
        href={href ?? "https://wa.me/6285867942389"} target="_blank"
      >
        {children}
      </a>
      {noCardRequired && (
        <span className="text-sm tracking-tight text-neutral-600">
          WhatsApp
        </span>
      )}
    </>
  );
};
