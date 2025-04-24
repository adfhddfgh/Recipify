// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const seedCuisines = async () => {
  const count = await prisma.cuisine.count();
  if (count === 0) {
    await prisma.cuisine.createMany({
      data: [
        {
          name: "African",
          description:
            "African cuisine is diverse and rich in flavors, featuring stews, grains, and unique spice blends.",
        },
        {
          name: "Chinese",
          description:
            "Chinese cuisine offers regional diversity from spicy Sichuan to delicate Cantonese dishes.",
        },
        {
          name: "Japanese",
          description:
            "Japanese cuisine emphasizes seasonality, fresh ingredients, and beautiful presentation.",
        },
        {
          name: "Korean",
          description:
            "Korean cuisine features bold flavors with fermented foods like kimchi and various banchan (side dishes).",
        },
        {
          name: "Vietnamese",
          description:
            "Vietnamese cuisine is known for its fresh herbs, light broths, and balance of flavors.",
        },
        {
          name: "Thai",
          description:
            "Thai cuisine balances sweet, sour, spicy, and salty flavors in vibrant dishes.",
        },
        {
          name: "Indian",
          description:
            "Indian cuisine varies by region but is universally rich in spices and complex flavors.",
        },
        {
          name: "British",
          description:
            "British cuisine features hearty dishes like fish and chips, roasts, and savory pies.",
        },
        {
          name: "Irish",
          description:
            "Irish cuisine is known for its dairy products, seafood, and traditional stews.",
        },
        {
          name: "French",
          description:
            "French cuisine is renowned for its techniques, sauces, and emphasis on quality ingredients.",
        },
        {
          name: "Italian",
          description:
            "Italian cuisine varies regionally but is globally loved for its pasta, pizza, and fresh ingredients.",
        },
        {
          name: "Mexican",
          description:
            "Mexican cuisine features corn, beans, chili peppers, and complex moles with ancient roots.",
        },
        {
          name: "Spanish",
          description:
            "Spanish cuisine includes tapas, paella, and excellent cured meats and cheeses.",
        },
        {
          name: "Middle Eastern",
          description:
            "Middle Eastern cuisine features hummus, falafel, kebabs, and aromatic spices.",
        },
        {
          name: "Jewish",
          description:
            "Jewish cuisine varies by tradition but includes dishes like matzo ball soup and challah.",
        },
        {
          name: "American",
          description:
            "American cuisine is a melting pot of influences with regional specialties.",
        },
        {
          name: "Cajun",
          description:
            "Cajun cuisine from Louisiana features bold spices, rice dishes, and seafood.",
        },
        {
          name: "Southern",
          description:
            "Southern U.S. cuisine includes fried chicken, biscuits, and soul food traditions.",
        },
        {
          name: "Greek",
          description:
            "Greek cuisine features olive oil, feta, fresh vegetables, and grilled meats.",
        },
        {
          name: "German",
          description:
            "German cuisine is known for sausages, pretzels, potatoes, and hearty breads.",
        },
        {
          name: "Nordic",
          description:
            "Nordic cuisine emphasizes seafood, foraged foods, and preservation techniques.",
        },
        {
          name: "Eastern European",
          description:
            "Eastern European cuisine includes pierogi, borscht, and hearty comfort foods.",
        },
        {
          name: "Caribbean",
          description:
            "Caribbean cuisine blends African, European, and indigenous influences with tropical flavors.",
        },
        {
          name: "Latin American",
          description:
            "Latin American cuisine varies by country but shares corn, beans, and vibrant flavors.",
        },
      ],
    });
  }
};

seedCuisines();

//Db fetching endpoints
export async function getCuisine(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.cuisine.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.cuisine.findMany();
}

export async function addCuisine(name: string, description: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.cuisine.create({
    data: { name, description },
  });
}

export async function updateCuines(
  id: number,
  name: string,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.cuisine.update({
    where: { id },
    data: { name, description },
  });
}

export async function deleteCuisine(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.cuisine.delete({
    where: { id },
  });
}
