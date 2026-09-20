import type { Metadata } from "next";
import TrainerClient from "./TrainerClient";

export const metadata: Metadata = {
  title: "SPM Exam Transfer Lab — Mixed Scenario Practice",
  description: "Interleaved SPM scenario practice, model discrimination, and SMEAC answer construction.",
  openGraph: { title: "SPM Exam Transfer Lab", description: "Mixed scenario practice for the HNU SPM exam.", images: [] },
  twitter: { title: "SPM Exam Transfer Lab", description: "Mixed scenario practice for the HNU SPM exam.", images: [] },
};

export default function TrainerPage(){ return <TrainerClient/>; }
