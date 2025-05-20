import Button from "@/app/components/Button";
import thumb from "@/public/images/img1.jpeg";
import Image from "next/image";

export default function Mission() {
  return (
    <main className="mt-10">
      <div>
        We always believe that we do not deliver parcels of books/products, we
        deliver “parcels of happiness”. Rokomari.com is on a mission to drive
        Bangladeshs most comprehensive virtual business that helps customers
        make informed choices and extract the best value for their money.
      </div>
      <Image src={thumb} alt="Thumb Image" />
      <Button />
    </main>
  );
}
