// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { GetMealPlan } from "../services/rapid_api";

// interface Meal {
//   id: number;
//   title: string;
//   imageType: string;
//   readyInMinutes: number;
//   servings: number;
//   sourceUrl: string;
// }

// interface Nutrients {
//   calories: number;
//   carbohydrates: number;
//   fat: number;
//   protein: number;
// }

// interface DailyMealPlan {
//   meals: Meal[];
//   nutrients: Nutrients;
// }

// export default function DailyMealPlanPage() {
//   const [mealPlan, setMealPlan] = useState<DailyMealPlan | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         const response = await GetMealPlan();
//         const data = JSON.parse(response); // Parse the response text
//         console.log("API Data Received:", data);
//         setMealPlan(data);
//       } catch (error) {
//         console.error("Failed to load meal plan:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, []);

//   const getMealImage = (meal: Meal) => {
//     return `https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}`;
//   };

//   const renderNutrient = (name: string, value: number, unit?: string) => (
//     <div key={name} className="bg-gray-50 p-3 rounded">
//       <p className="font-semibold">{name}</p>
//       <p>
//         {value} {unit || ""}
//       </p>
//     </div>
//   );

//   if (loading) return <p className="text-center py-8">Loading meal plan...</p>;
//   if (!mealPlan || mealPlan.meals.length === 0) {
//     console.log("Rendering 'No meal plan found'", { mealPlan });
//     return <p className="text-center py-8">No meal plan found.</p>;
//   }

//   return (
//     <div className="min-h-screen font-sans px-4 py-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8 text-center">Daily Meal Plan</h1>

//       {/* Nutrition Summary */}
//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Daily Nutrition Summary</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {renderNutrient("Calories", mealPlan.nutrients.calories, "cal")}
//           {renderNutrient("Carbs", mealPlan.nutrients.carbohydrates, "g")}
//           {renderNutrient("Fat", mealPlan.nutrients.fat, "g")}
//           {renderNutrient("Protein", mealPlan.nutrients.protein, "g")}
//         </div>
//       </section>

//       {/* Meals */}
//       <div className="space-y-8">
//         {mealPlan.meals.map((meal) => (
//           <div key={meal.id} className="border rounded-lg p-6">
//             <div className="flex flex-col md:flex-row gap-6">
//               <div className="flex-shrink-0">
//                 <Image
//                   src={getMealImage(meal)}
//                   alt={meal.title}
//                   width={312}
//                   height={231}
//                   className="rounded-md object-cover w-full md:w-48"
//                 />
//               </div>
//               <div className="flex-grow">
//                 <h2 className="text-2xl font-bold mb-2">{meal.title}</h2>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <p className="text-sm text-gray-500">Ready in</p>
//                     <p>{meal.readyInMinutes} minutes</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Servings</p>
//                     <p>{meal.servings}</p>
//                   </div>
//                 </div>
//                 <a
//                   href={meal.sourceUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   View Recipe
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/header";

export default function MealPlanningPage() {
  const [view, setView] = useState<"month" | "week" | "day">("month");
  const [include, setInclude] = useState({
    breakfast: true,
    lunch: true,
    dinner: true,
  });

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weeks = Array.from({ length: Math.ceil(daysInMonth / 7) }, (_, i) => i);

  const renderMealSection = () => (
    <div className="text-gray-700 space-y-1">
      {include.breakfast && (
        <div>
          <strong>breakfast:</strong>
        </div>
      )}
      {include.lunch && (
        <div>
          <strong>lunch:</strong>
        </div>
      )}
      {include.dinner && (
        <div>
          <strong>dinner:</strong>
        </div>
      )}
    </div>
  );

  const renderWeekView = () => {
    const currentDayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - currentDayOfWeek);

    const weekDays = Array.from({ length: 7 }, (_, idx) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + idx);
      return day;
    });

    return (
      <table className="w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            {daysOfWeek.map((day) => (
              <th
                key={day}
                className="border border-gray-300 px-2 py-2 text-left"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weekDays.map((date) => {
              const isToday = date.toDateString() === today.toDateString();
              return (
                <td
                  key={date.toString()}
                  className={`border border-gray-300 p-2 align-top ${
                    isToday ? "bg-yellow-100" : ""
                  }`}
                >
                  <div className="font-semibold text-xs mb-1">
                    {date.getDate()}
                  </div>
                  {renderMealSection()}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  };

  const renderMonthView = () => (
    <table className="w-full border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-200">
          {daysOfWeek.map((day) => (
            <th
              key={day}
              className="border border-gray-300 px-2 py-2 text-left"
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((_, weekIdx) => (
          <tr key={weekIdx}>
            {daysOfWeek.map((day, dayIdx) => {
              const date = weekIdx * 7 + dayIdx + 1;
              if (date > daysInMonth)
                return <td key={day} className="border border-gray-300 p-2" />;
              const isToday = date === currentDate;
              return (
                <td
                  key={day}
                  className={`border border-gray-300 p-2 align-top ${
                    isToday ? "bg-yellow-100" : ""
                  }`}
                >
                  <div className="font-semibold text-xs mb-1">{date}</div>
                  {renderMealSection()}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderDayView = () => (
    <div className="border border-gray-300 p-4">
      <h3 className="font-semibold mb-2">
        {today.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })}
      </h3>
      {renderMealSection()}
    </div>
  );

  useEffect(() => {
    setView("month");
  }, []);

  return (
    <div className="min-h-screen flex font-sans bg-white">
      <aside className="w-60 bg-gray-100 border-r border-gray-300 p-4 space-y-6">
        <nav className="space-y-4">
          {["my meal plan", "recipe", "shopping list"].map((item) => (
            <button
              key={item}
              className="block w-full text-left bg-white rounded px-4 py-2 shadow hover:bg-gray-200 transition"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="mt-auto space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <span className="bg-purple-100 rounded-full w-8 h-8 inline-block" />
            <span>Username</span>
          </div>
          <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-black">
            <span className="w-4 h-4 bg-gray-400 rounded-full" />
            <span>Account Settings</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Render Header here */}
        {/* <Header /> */}

        <div className="flex flex-wrap items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Calendar</h2>
          <div className="space-x-2">
            {["month", "week", "day"].map((type) => (
              <button
                key={type}
                onClick={() => setView(type as "month" | "week" | "day")}
                className={`px-3 py-1 rounded transition ${
                  view === type
                    ? "bg-black text-white"
                    : "border border-gray-300 text-black"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center space-x-4 mb-4">
          <p className="text-gray-700">
            {today.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <button className="rounded border px-3 py-1">Add New</button>
        </div>

        {/* Include Checkboxes */}
        <div className="flex items-center space-x-4 mb-4">
          {(["breakfast", "lunch", "dinner"] as const).map((meal) => (
            <label key={meal} className="inline-flex items-center space-x-1">
              <input
                type="checkbox"
                checked={include[meal]}
                onChange={() =>
                  setInclude((prev) => ({ ...prev, [meal]: !prev[meal] }))
                }
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">{meal}</span>
            </label>
          ))}
        </div>

        <div className="overflow-x-auto">
          {view === "month" && renderMonthView()}
          {view === "week" && renderWeekView()}
          {view === "day" && renderDayView()}
        </div>
      </main>
    </div>
  );
}
