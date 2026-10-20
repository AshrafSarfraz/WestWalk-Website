import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import HomeBelonging from "@/components/HomeBelonging";
import HomeExperiences from "@/components/HomeExperiences";
import HomeStory from "@/components/HomeStory";
import { homeImages, images } from "@/data/site";
import HomeWellness from "@/components/HomeWellness";
import HomeVisit from "@/components/HomeVisit";

export const metadata = {
  title: "A life connected | West Walk",
};

export default function Page() {
  return (
    <main id="main" className="bg-white font-sans text-black">
      <HomeHero />
      {/* <HomeBelonging /> */}
      <HomeExperiences />
      <HomeStory />
      <HomeWellness />
      <HomeVisit />

    </main>
  );
}