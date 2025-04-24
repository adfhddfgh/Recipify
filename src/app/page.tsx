import Image from "next/image";
import { Header } from "@/components/header";

// import { Card } from "@/components/cards";

export default function Home() {
  // // const [query, setQuery] = useState("");

  // const handleSearch = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!query.trim()) return;

  //   // Replace this with your API call
  //   console.log("Searching for:", query);
  // };

  return (
    <div className="min-h-screen font-sans">
      
    <header />
    
      {/* Hero Section */}
      <section className="px-6 py-16 text-center md:text-left max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Cook Smarter Not Harder!</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you're gluten-free, vegan, or just staring at a half-empty
          fridge, we’ve got your back. Explore 50,000+ recipes. Say goodbye to
          meal-planning stress. Instantly find recipes that match your
          ingredients, cook time, and dietary needs. Save favorites, track
          nutrition, and even auto-generate a grocery list—all in one place.
        </p>
      </section>

      {/* Hero Image */}
      <div className="px-6">
        <Image
          src="/hero-image.jpg"
          alt="Featured ingredients"
          width={1200}
          height={600}
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Trending Meals */}
      <section className="px-6 py-16">
        <h3 className="text-2xl font-bold mb-6">Trending Meals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/meal1.jpg"
              alt="Meal 1"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/meal2.jpg"
              alt="Meal 2"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/meal3.jpg"
              alt="Meal 3"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
