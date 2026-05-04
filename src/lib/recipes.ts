export type DietGoal = "weight_loss" | "muscle_gain" | "vegan" | "healthy";

export type RecipeTag = "lowcal" | "protein" | "vegan";

export interface Recipe {
  name: string;
  emoji: string;
  time: string;
  calories: number;
  tag: RecipeTag;
  tagLabel: string;
  goals: DietGoal[];
}

export const recipes: Recipe[] = [
  { name: "Greek Yogurt Parfait", emoji: "🍓", time: "5 min", calories: 320, tag: "lowcal", tagLabel: "LOW CAL", goals: ["weight_loss", "healthy"] },
  { name: "Chicken Rice Bowl", emoji: "🍗", time: "25 min", calories: 620, tag: "protein", tagLabel: "PROTEIN", goals: ["muscle_gain"] },
  { name: "Tofu Stir Fry", emoji: "🥢", time: "20 min", calories: 400, tag: "vegan", tagLabel: "VEGAN", goals: ["vegan", "weight_loss"] },
  { name: "Quinoa Veggie Bowl", emoji: "🥗", time: "30 min", calories: 480, tag: "vegan", tagLabel: "VEGAN", goals: ["vegan", "healthy"] },
  { name: "Baked Salmon", emoji: "🐟", time: "20 min", calories: 520, tag: "protein", tagLabel: "PROTEIN", goals: ["muscle_gain", "healthy"] },
  { name: "Avocado Egg Toast", emoji: "🥑", time: "10 min", calories: 420, tag: "lowcal", tagLabel: "LOW CAL", goals: ["healthy", "weight_loss"] },
  { name: "Lentil Dal", emoji: "🍲", time: "35 min", calories: 450, tag: "vegan", tagLabel: "VEGAN", goals: ["vegan", "healthy"] },
  { name: "Protein Oatmeal", emoji: "🥣", time: "10 min", calories: 580, tag: "protein", tagLabel: "PROTEIN", goals: ["muscle_gain"] },
  { name: "Mediterranean Salad", emoji: "🫒", time: "10 min", calories: 380, tag: "lowcal", tagLabel: "LOW CAL", goals: ["healthy", "weight_loss"] },
  { name: "Black Bean Tacos", emoji: "🌮", time: "20 min", calories: 490, tag: "vegan", tagLabel: "VEGAN", goals: ["vegan", "healthy"] },
  { name: "Egg White Omelette", emoji: "🍳", time: "10 min", calories: 280, tag: "protein", tagLabel: "PROTEIN", goals: ["muscle_gain", "weight_loss"] },
  { name: "Fruit Smoothie Bowl", emoji: "🫐", time: "5 min", calories: 320, tag: "vegan", tagLabel: "VEGAN", goals: ["vegan", "healthy"] },
];

export const goalLabels: Record<DietGoal | "all", string> = {
  all: "All",
  weight_loss: "🔥 Weight Loss",
  muscle_gain: "💪 Muscle Gain",
  vegan: "🌱 Vegan",
  healthy: "✨ Healthy",
};
