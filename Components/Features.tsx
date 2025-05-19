import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="relative w-full max-w-[1440px] flex flex-col px-[1.39vw] py-[3.47vw] mt-20 text-center box-border -top-[45px]">
      <div className="mb-[2.78vw] box-border">
        <div className="inline-block px-5 py-2.5 text-white font-bold text-sm rounded bg-gradient-to-r from-[#0f3b02] to-[#3cd34b] relative text-center before:content-[''] before:absolute before:top-[5px] before:left-[5px] before:w-full before:h-full before:bg-[#50e45b] before:-z-10 before:rounded before:skew-x-[-10deg]">
          Our Features
        </div>
      </div>
      <div className="flex flex-col gap-[2.22vw] my-[1.39vw] px-[1.39vw] box-border md:flex-row md:px-[1.39vw]">
        <article className="flex flex-col gap-[1.11vw] w-full h-auto mx-auto box-border md:w-[41.11vw]">
          <Image
            className="w-full h-auto rounded-[0.56vw] object-cover"
            src="/images/image1.png"
            height={600}
            width={800}
            alt="Biometric identification illustration"
          />
          <div className="w-full text-justify mx-auto box-border">
            <h3 className="text-lg font-semibold">
              Suspect Profiling and Biometric Identification
            </h3>
            <p className="font-[Sora-SemiBold] text-base text-[#5f6368] text-justify">
              This module profiles a suspect when arrested by capturing their
              personal details, and biometric data (such as fingerprints, facial
              recognition, and iris scans). This module also records the reason
              the prospect was arrested. The module automatically cross-checks
              the suspect’s information against existing databases to determine
              if the suspect is a first-time offender or a repeat offender. If
              the individual has a prior record, law enforcement officers can
              instantly access details of their past crimes, convictions, and
              parole status.{" "}
              <a
                href="/features/biometric-identification"
                className="text-green-600 underline"
              >
                Learn more
              </a>
            </p>
          </div>
        </article>

        <div className="flex flex-col gap-[2.22vw] w-full max-w-full mx-auto box-border md:w-[41.11vw]">
          <div className="flex flex-col gap-[1.11vw] w-full h-auto mx-auto box-border md:flex-row md:gap-[1.67vw]">
            <Image
              src="/images/image2.png"
              height={300}
              width={400}
              alt="Investigation management visual"
              className="w-full h-auto rounded-[0.56vw] object-cover md:w-[22.22vw] md:h-auto"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold">
                Investigation Management and Case Documentation
              </h3>
              <p className="font-[Sora-SemiBold] text-base text-[#5f6368] text-justify">
                The module provides a structured investigation workflow where
                law enforcement officers can document every stage of an
                investigation.{" "}
                <a
                  href="/features/case-documentation"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1.11vw] w-full h-auto mx-auto box-border md:flex-row md:gap-[1.67vw]">
            <Image
              className="w-full h-auto rounded-[0.56vw] object-cover md:w-[22.22vw] md:h-auto"
              src="/images/image3.png"
              height={300}
              width={400}
              alt="Inter-agency data sharing"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold">
                Inter-Agency Collaboration and Secure Data Sharing
              </h3>
              <p className="font-[Sora-SemiBold] text-base text-[#5f6368] text-justify">
                The solution allows for seamless and secure information sharing
                between law enforcement agencies and the judiciary.{" "}
                <a
                  href="/features/data-sharing"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
