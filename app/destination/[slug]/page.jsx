
import shopsData from "@/data/destination.json";
import Detail from "@/components/DestinationDetail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return shopsData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = shopsData.find((x) => x.slug === slug);

  return {
    title: item
      ? `${item.title} | West Walk`
      : "Not found | West Walk",
    description: item?.description || "Discover West Walk.",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const item = shopsData.find((x) => x.slug === slug);

  if (!item) notFound();

  return <Detail item={item} />;
}
