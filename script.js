
const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const navbarHeight = navbar.offsetHeight;

    if (scrollY > navbarHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
  /*----------------------------------------------------------------------------------------*/
  // code for Nutrition page
  const proteinCOntent = [
      {
          FoodItem: "Salmon",
          Quantity: "100g",
          Content: "25g",
        },
        {
          FoodItem: "Tofu",
          Quantity: "150g",
          Content: "18g",
        },
        {
          FoodItem: "Cottage Cheese",
          Quantity: "200g",
          Content: "28g",
        },
        {
          FoodItem: "Turkey Breast",
          Quantity: "100g",
          Content: "29g",
        },
        {
          FoodItem: "Quinoa",
          Quantity: "1 cup cooked",
          Content: "8g",
        },
        {
          FoodItem: "Lentils",
          Quantity: "1 cup cooked",
          Content: "18g",
        },
        {
          FoodItem: "Chickpeas",
          Quantity: "1 cup cooked",
          Content: "15g",
        },
        {
          FoodItem: "Peanut Butter",
          Quantity: "2 tablespoons",
          Content: "8g",
        },
  ];
  const carboContent = [
      {
          FoodItem: "Brown Rice",
          Quantity: "1 cup cooked",
          Content: "45g",
        },
        {
          FoodItem: "Sweet Potato",
          Quantity: "1 medium",
          Content: "26g",
        },
        {
          FoodItem: "Oats",
          Quantity: "1 cup cooked",
          Content: "54g",
        },
        {
          FoodItem: "Banana",
          Quantity: "1 medium",
          Content: "27g",
        },
        {
          FoodItem: "Quinoa",
          Quantity: "1 cup cooked",
          Content: "39g",
        },
        {
          FoodItem: "Whole Wheat Bread",
          Quantity: "2 slices",
          Content: "24g",
        },
        {
          FoodItem: "Pasta",
          Quantity: "1 cup cooked",
          Content: "43g",
        },
        {
          FoodItem: "Apples",
          Quantity: "1 medium",
          Content: "25g",
        },
  ];
  const fatContent = [
      {
          FoodItem: "Avocado",
          Quantity: "1 medium",
          Content: "21g",
        },
        {
          FoodItem: "Olive Oil",
          Quantity: "1 tablespoon",
          Content: "14g",
        },
        {
          FoodItem: "Almonds",
          Quantity: "1 ounce",
          Content: "14g",
        },
        {
          FoodItem: "Salmon",
          Quantity: "3 ounces",
          Content: "13g",
        },
        {
          FoodItem: "Chia Seeds",
          Quantity: "2 tablespoons",
          Content: "9g",
        },
        {
          FoodItem: "Walnuts",
          Quantity: "1 ounce",
          Content: "18g",
        },
        {
          FoodItem: "Peanut Butter",
          Quantity: "2 tablespoons",
          Content: "16g",
        },
        {
          FoodItem: "Cheese (Cheddar)",
          Quantity: "1 ounce",
          Content: "9g",
        },
  ];
  const fiberContent = [
      {
          FoodItem: "Broccoli",
          Quantity: "1 cup cooked",
          Content: "5g",
      },
      {
          FoodItem: "Raspberries",
          Quantity: "1 cup",
          Content: "8g",
      },
      {
          FoodItem: "Oat Bran",
          Quantity: "1/2 cup",
          Content: "7g",
      },
      {
          FoodItem: "Chia Seeds",
          Quantity: "2 tablespoons",
          Content: "10g",
      },
      {
          FoodItem: "Lentils",
          Quantity: "1 cup cooked",
          Content: "15g",
      },
  ];

  const vitaminContent = [
      {
          FoodItem: "Spinach",
          Quantity: "1 cup cooked",
          Content: "987% DV (Vitamin K), 47% DV (Vitamin C)",
      },
      {
          FoodItem: "Carrots",
          Quantity: "1 medium",
          Content: "428% DV (Vitamin A), 10% DV (Vitamin K)",
      },
      {
          FoodItem: "Oranges",
          Quantity: "1 medium",
          Content: "93% DV (Vitamin C)",
      },
      {
          FoodItem: "Almonds",
          Quantity: "1 ounce",
          Content: "7% DV (Calcium), 76% DV (Vitamin E)",
      },
      {
          FoodItem: "Salmon",
          Quantity: "3 ounces",
          Content: "79% DV (Vitamin D), 59% DV (Vitamin B12)",
      },
  ];

  const mineralContent = [
      {
          FoodItem: "Kale",
          Quantity: "1 cup cooked",
          Content: "9% DV (Calcium), 26% DV (Magnesium)",
      },
      {
          FoodItem: "Bananas",
          Quantity: "1 medium",
          Content: "8% DV (Potassium), 1% DV (Iron)",
      },
      {
          FoodItem: "Pumpkin Seeds",
          Quantity: "1 ounce",
          Content: "23% DV (Iron), 37% DV (Magnesium)",
      },
      {
          FoodItem: "Yogurt",
          Quantity: "1 cup",
          Content: "49% DV (Calcium), 12% DV (Phosphorus)",
      },
      {
          FoodItem: "Sweet Potatoes",
          Quantity: "1 medium",
          Content: "7% DV (Potassium), 20% DV (Manganese)",
      },
  ];

  const proteinSheet = document.querySelector(".excel-sheet-Pro");
  const carboSheet = document.querySelector(".excel-sheet-Carbo");
  const FatSheet = document.querySelector(".excel-sheet-Fat");
  const fiberSheet = document.querySelector(".excel-sheet-Fiber");
  const vitaminSheet = document.querySelector(".excel-sheet-Vitamin");
  const mineralSheet = document.querySelector(".excel-sheet-Mineral");

  const protein = document.getElementById("Protein");
  const carbohydrates = document.getElementById("Carbo");
  const Fat = document.getElementById("Fat");
  const fiberButton = document.getElementById("Fiber");
  const vitaminButton = document.getElementById("Vitamin");
  const mineralButton = document.getElementById("Mineral");


  protein.addEventListener("click", (event) => {
      toggleSheet(proteinSheet, proteinCOntent);
  });

  carbohydrates.addEventListener("click", (event) => {
      toggleSheet(carboSheet, carboContent);
  });

  Fat.addEventListener("click", (event) => {
      toggleSheet(FatSheet, fatContent);
  });

  fiberButton.addEventListener("click", () => {
      toggleSheet(fiberSheet, fiberContent);
  });

  vitaminButton.addEventListener("click", () => {
      toggleSheet(vitaminSheet, vitaminContent);
  });

  mineralButton.addEventListener("click", () => {
      toggleSheet(mineralSheet, mineralContent);
  });

  function toggleSheet(sheet, content) {
      sheet.innerHTML = "";
      sheet.style.display = sheet.style.display === "none" ? "block" : "none";

      if (sheet.style.display === "block") {
          // Header row
          const headerRow = document.createElement("div");
          headerRow.classList = "excel-row header-row";

          const foodItemHeader = document.createElement("div");
          foodItemHeader.innerHTML = "Food Item";
          foodItemHeader.classList = "FoodItem";
          headerRow.appendChild(foodItemHeader);

          const quantityHeader = document.createElement("div");
          quantityHeader.innerHTML = "Quantity";
          quantityHeader.classList = "Quantity";
          headerRow.appendChild(quantityHeader);

          const contentHeader = document.createElement("div");
          contentHeader.innerHTML = "Content";
          contentHeader.classList = "Content";
          headerRow.appendChild(contentHeader);

          sheet.appendChild(headerRow);

          // Data rows
          content.forEach(item => {
              const row = document.createElement("div");
              row.classList = "excel-row";

              const foodItem = document.createElement("div");
              foodItem.innerHTML = item.FoodItem;
              foodItem.classList = "FoodItem";
              row.appendChild(foodItem);

              const quantity = document.createElement("div");
              quantity.innerHTML = item.Quantity;
              quantity.classList = "Quantity";
              row.appendChild(quantity);

              const content = document.createElement("div");
              content.innerHTML = item.Content;
              content.classList = "Content";
              row.appendChild(content);

              sheet.appendChild(row);
          });

        
      }
  }
  /*----------------------------------------------------------------------------------*/

  //code for FItness

  const bgwInitialPlan = [
    {
      head: "Day 1: Full Body Workout",
      list: ["Squats: 3 sets x 8-12 reps", "Bench Press: 3 sets x 8-12 reps", "Deadlifts: 3 sets x 8-12 reps", "Overhead Press: 3 sets x 8-12 reps"]
    },
    {
      head: "Day 2: Rest or Light Cardio",
      list: ["Rest day or engage in light cardiovascular exercise like walking or cycling for 30 minutes."]
    },
    {
      head: "Full Body Workout",
      list: ["Cardiovascular exercise (running, cycling, or elliptical): 30-45 minutes", "Planks: 3 sets x 30-60 seconds", "Russian Twists: 3 sets x 15-20 reps", "Leg Raises: 3 sets x 12-15 reps"]
    },
  {
      head: "Day 4: Rest or Light Cardio",
      list: ["Rest day or light cardiovascular exercise."]
    },
    {
      head: "Day 5: Upper Body Workout",
      list: ["Pull-ups or Lat Pulldowns: 3 sets x 8-12 reps", "Dumbbell Rows: 3 sets x 10-15 reps", "Dumbbell Bench Press: 3 sets x 8-12 reps", "Dumbbell Shoulder Press: 3 sets x 10-15 reps","Tricep Dips: 3 sets x 12-15 reps"]
    },
    {
      head: "Day 6: Lower Body and Cardio",
      list: ["Leg Press: 3 sets x 10-15 reps", "Lunges: 3 sets x 12-16 reps (each leg)", "Leg Curls: 3 sets x 10-15 reps", "Cardiovascular exercise: 20-30 minutes"]
    },
    {
      head: "Day 7: Rest or Active Recovery",
      list: ["Rest day or engage in light activities like walking, yoga, or stretching."]
    },
    {
      head: "Nutrition Tips:",
      list:[
        "Consume a calorie surplus: Eat more calories than your body burns to promote weight gain.",
        "Include a balance of macronutrients: Proteins, carbohydrates, and healthy fats.",
        "Eat protein-rich foods: Include sources like lean meats, dairy, eggs, and legumes in your diet.",
        "Stay hydrated: Drink plenty of water throughout the day.",
        "Consider consulting a nutritionist for personalized advice."]
    }
  ];

  const bgwPostPlan = [
    {
      workout : "Weeks 1-2: Foundation Building",
      Days : ["Full Body Workout","Rest or Light Cardio","Full Body Workout", "Rest or Light Cardio", "Upper Body Workout","Lower Body and Cardio", "Rest or Active Recovery"]
    },
    {
      workout: "Weeks 3-4: Increasing Intensity",
      Days: [
          "Full Body Workout (increase weights slightly)",
          "Rest or Light Cardio",
          "Full Body Workout (add an extra set to each exercise)",
          "Rest or Light Cardio",
          "Upper Body Workout (increase weights slightly)",
          "Lower Body and Cardio (introduce a new lower body exercise)",
          "Rest or Active Recovery"
      ]
  },
  {
    workout: "Weeks 5-6: Progressive Overload",
    Days: [
        "Full Body Workout (focus on progressive overload, increase weights)",
        "Rest or Light Cardio",
        "Full Body Workout (maintain increased sets and weights)",
        "Rest or Light Cardio",
        "Upper Body Workout (increase weights and focus on form)",
        "Lower Body and Cardio (progressively overload lower body exercises)",
        "Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 7-8: Refinement and Consistency",
    Days: [
        "Full Body Workout (fine-tune form, maintain or slightly increase weights)",
        "Rest or Light Cardio",
        "Full Body Workout (focus on mind-muscle connection)",
        "Rest or Light Cardio",
        "Upper Body Workout (challenge yourself with increased intensity)",
        "Lower Body and Cardio (maintain intensity, consider adding a new cardio challenge)",
        "Rest or Active Recovery"
    ]
  },
    {
      workout : "Nutrition Tips (Throughout the 2 Months):",
      Days:["Adjust caloric intake based on weight gain progress.","Regularly assess and adjust protein, carbohydrate, and fat intake.","Stay hydrated and consider post-workout nutrition for recovery.","Monitor weight gain and adjust nutrition as needed.",
      "Always listen to your body, ensure proper rest, and consult with a fitness professional or healthcare provider if you have any concerns or health conditions."]
  }
  ]
  const blwInitialPlan =[
    {
      head: "Day 1: Full Body Strength Training",
      list: [
          "Squats: 3 sets x 10-15 reps",
          "Push-ups: 3 sets x 10-15 reps",
          "Bent Over Rows: 3 sets x 12-20 reps",
          "Planks: 3 sets x 30-60 seconds",
          "Cardio: 20 minutes (choose from running, cycling, or elliptical)"
      ]
  },
  {
      head: "Day 2: Rest or Light Cardio",
      list: [
          "Rest day or engage in light cardiovascular exercise like walking or cycling for 30 minutes."
      ]
  },
  {
      head: "Day 3: Cardio and Core",
      list: [
          "Cardiovascular exercise (running, cycling, or elliptical): 30-45 minutes",
          "Russian Twists: 3 sets x 15-20 reps",
          "Leg Raises: 3 sets x 12-15 reps",
          "Mountain Climbers: 3 sets x 20-30 reps"
      ]
  },
  {
      head: "Day 4: Rest or Light Cardio",
      list: [
          "Rest day or light cardiovascular exercise."
      ]
  },
  {
      head: "Day 5: High-Intensity Interval Training (HIIT)",
      list: [
          "HIIT Workout: 20-30 minutes (e.g., 30 seconds high intensity, 30 seconds rest)",
          "Bodyweight Exercises (e.g., Burpees, Jump Squats, High Knees)"
      ]
  },
  {
      head: "Day 6: Lower Body and Cardio",
      list: [
          "Lunges: 3 sets x 12-16 reps (each leg)",
          "Deadlifts: 3 sets x 10-15 reps",
          "Leg Press: 3 sets x 10-15 reps",
          "Cardiovascular exercise: 20-30 minutes"
      ]
  },
  {
      head: "Day 7: Rest or Active Recovery",
      list: [
          "Rest day or engage in light activities like walking, yoga, or stretching."
      ]
  },
  {
      head: "Weeks 2-4: Increase Intensity",
      list: [
          "Gradually increase the duration or intensity of cardiovascular exercises.",
          "Increase the difficulty of strength training exercises by adding more weight or incorporating advanced variations."
      ]
  },
  {
      head: "Weeks 5-8: Add Variety and Progress",
      list: [
          "Introduce new exercises or variations to keep the workouts challenging.",
          "Continue to monitor and adjust the intensity of your workouts based on progress."
      ]
  },
  {
    head: "Nutrition Tips:",
    list: [
        "Create a calorie deficit by consuming fewer calories than your body burns.",
        "Prioritize whole foods, lean proteins, vegetables, and whole grains.",
        "Stay hydrated and avoid sugary drinks and excessive snacking.",
        "Consider consulting a nutritionist for personalized advice.",
        "Remember, consistency is key for weight loss. Be patient and make adjustments to your workout routine and diet as needed. Always listen to your body and consult with a fitness professional or healthcare provider if you have any concerns or health conditions."
    ]
  }

  ]
  const blwPostPlan = [
      {
          workout: "Weeks 1-2: Foundation Building",
          Days: [
              "Day 1: Full Body Strength Training + Cardio (30 minutes)",
              "Day 2: Rest or Light Cardio",
              "Day 3: Cardio and Core (40 minutes)",
              "Day 4: Rest or Light Cardio",
              "Day 5: HIIT Workout (20 minutes)",
              "Day 6: Lower Body and Cardio (30 minutes)",
              "Day 7: Rest or Active Recovery"
          ]
      },
      {
          workout: "Weeks 3-4: Increasing Intensity",
          Days: [
              "Day 1: Full Body Strength Training + Cardio (35 minutes)",
              "Day 2: Rest or Light Cardio",
              "Day 3: Cardio and Core (45 minutes)",
              "Day 4: Rest or Light Cardio",
              "Day 5: HIIT Workout (25 minutes)",
              "Day 6: Lower Body and Cardio (35 minutes)",
              "Day 7: Rest or Active Recovery"
          ]
      },
      {
          workout: "Weeks 5-6: Progressive Overload",
          Days: [
              "Day 1: Full Body Strength Training + Cardio (40 minutes)",
              "Day 2: Rest or Light Cardio",
              "Day 3: Cardio and Core (50 minutes)",
              "Day 4: Rest or Light Cardio",
              "Day 5: HIIT Workout (30 minutes)",
              "Day 6: Lower Body and Cardio (40 minutes)",
              "Day 7: Rest or Active Recovery"
          ]
      },
      {
          workout: "Weeks 7-8: Refinement and Consistency",
          Days: [
              "Day 1: Full Body Strength Training + Cardio (45 minutes)",
              "Day 2: Rest or Light Cardio",
              "Day 3: Cardio and Core (55 minutes)",
              "Day 4: Rest or Light Cardio",
              "Day 5: HIIT Workout (35 minutes)",
              "Day 6: Lower Body and Cardio (45 minutes)",
              "Day 7: Rest or Active Recovery"
          ]
      },
    {
      workout: "Nutrition Tips (Throughout the 2 Months):",
      Days: [
        "Create a calorie deficit by consuming fewer calories than your body burns.",
        "Prioritize whole foods, lean proteins, vegetables, and whole grains.",
        "Stay hydrated and avoid sugary drinks and excessive snacking.",
        "Monitor your progress and adjust your calorie intake as needed.",
        "Remember, individual progress may vary, so listen to your body and make adjustments based on your needs. If you have any health concerns or conditions, it's advisable to consult with a healthcare professional or fitness expert before starting a new exercise program."

      ]
    }

  ]
  const igwInitialPlan = [{
    head: "Day 1: Full Body Workout",
    list: ["Squats: 3 sets x 8-12 reps", "Bench Press: 3 sets x 8-12 reps", "Deadlifts: 3 sets x 8-12 reps", "Overhead Press: 3 sets x 8-12 reps"]
  },
  {
    head: "Day 2: Rest or Light Cardio",
    list: ["Rest day or engage in light cardiovascular exercise like walking or cycling for 30 minutes."]
  },
  {
    head: "Full Body Workout",
    list: ["Cardiovascular exercise (running, cycling, or elliptical): 30-45 minutes", "Planks: 3 sets x 30-60 seconds", "Russian Twists: 3 sets x 15-20 reps", "Leg Raises: 3 sets x 12-15 reps"]
  },
  {
    head: "Day 4: Rest or Light Cardio",
    list: ["Rest day or light cardiovascular exercise."]
  },
  {
    head: "Day 5: Upper Body Workout",
    list: ["Pull-ups or Lat Pulldowns: 3 sets x 8-12 reps", "Dumbbell Rows: 3 sets x 10-15 reps", "Dumbbell Bench Press: 3 sets x 8-12 reps", "Dumbbell Shoulder Press: 3 sets x 10-15 reps","Tricep Dips: 3 sets x 12-15 reps"]
  },
  {
    head: "Day 6: Lower Body and Cardio",
    list: ["Leg Press: 3 sets x 10-15 reps", "Lunges: 3 sets x 12-16 reps (each leg)", "Leg Curls: 3 sets x 10-15 reps", "Cardiovascular exercise: 20-30 minutes"]
  },
  {
    head: "Day 7: Rest or Active Recovery",
    list: ["Rest day or engage in light activities like walking, yoga, or stretching."]
  },
  {
    head: "Nutrition Tips:",
    list:[
      "Consume a calorie surplus: Eat more calories than your body burns to promote weight gain.",
      "Include a balance of macronutrients: Proteins, carbohydrates, and healthy fats.",
      "Eat protein-rich foods: Include sources like lean meats, dairy, eggs, and legumes in your diet.",
      "Stay hydrated: Drink plenty of water throughout the day.",
      "Consider consulting a nutritionist for personalized advice."]
  }];
  const igwPostPlan = [
    {
      workout: "Weeks 1-2: Foundation Building",
      Days: [
          "Day 1: Full Body Strength Training + Cardio (30 minutes)",
          "Day 2: Rest or Light Cardio",
          "Day 3: Cardio and Core (40 minutes)",
          "Day 4: Rest or Light Cardio",
          "Day 5: HIIT Workout (20 minutes)",
          "Day 6: Lower Body and Cardio (30 minutes)",
          "Day 7: Rest or Active Recovery"
      ]
  },
  {
      workout: "Weeks 3-4: Increasing Intensity",
      Days: [
          "Day 1: Full Body Strength Training + Cardio (35 minutes)",
          "Day 2: Rest or Light Cardio",
          "Day 3: Cardio and Core (45 minutes)",
          "Day 4: Rest or Light Cardio",
          "Day 5: HIIT Workout (25 minutes)",
          "Day 6: Lower Body and Cardio (35 minutes)",
          "Day 7: Rest or Active Recovery"
      ]
  },
  {
      workout: "Weeks 5-6: Progressive Overload",
      Days: [
          "Day 1: Full Body Strength Training + Cardio (40 minutes)",
          "Day 2: Rest or Light Cardio",
          "Day 3: Cardio and Core (50 minutes)",
          "Day 4: Rest or Light Cardio",
          "Day 5: HIIT Workout (30 minutes)",
          "Day 6: Lower Body and Cardio (40 minutes)",
          "Day 7: Rest or Active Recovery"
      ]
  },
  {
      workout: "Weeks 7-8: Refinement and Consistency",
      Days: [
          "Day 1: Full Body Strength Training + Cardio (45 minutes)",
          "Day 2: Rest or Light Cardio",
          "Day 3: Cardio and Core (55 minutes)",
          "Day 4: Rest or Light Cardio",
          "Day 5: HIIT Workout (35 minutes)",
          "Day 6: Lower Body and Cardio (45 minutes)",
          "Day 7: Rest or Active Recovery"
      ]
  },
  {
  workout: "Nutrition Tips (Throughout the 2 Months):",
  Days: [
    "Create a calorie deficit by consuming fewer calories than your body burns.",
    "Prioritize whole foods, lean proteins, vegetables, and whole grains.",
    "Stay hydrated and avoid sugary drinks and excessive snacking.",
    "Monitor your progress and adjust your calorie intake as needed.",
    "Remember, individual progress may vary, so listen to your body and make adjustments based on your needs. If you have any health concerns or conditions, it's advisable to consult with a healthcare professional or fitness expert before starting a new exercise program."

  ]
  }
  ];
  const ilwInitialPlan = [{
    head: "Day 1: Full Body Workout",
    list: ["Squats: 3 sets x 8-12 reps", "Bench Press: 3 sets x 8-12 reps", "Deadlifts: 3 sets x 8-12 reps", "Overhead Press: 3 sets x 8-12 reps"]
  },
  {
    head: "Day 2: Rest or Light Cardio",
    list: ["Rest day or engage in light cardiovascular exercise like walking or cycling for 30 minutes."]
  },
  {
    head: "Full Body Workout",
    list: ["Cardiovascular exercise (running, cycling, or elliptical): 30-45 minutes", "Planks: 3 sets x 30-60 seconds", "Russian Twists: 3 sets x 15-20 reps", "Leg Raises: 3 sets x 12-15 reps"]
  },
  {
    head: "Day 4: Rest or Light Cardio",
    list: ["Rest day or light cardiovascular exercise."]
  },
  {
    head: "Day 5: Upper Body Workout",
    list: ["Pull-ups or Lat Pulldowns: 3 sets x 8-12 reps", "Dumbbell Rows: 3 sets x 10-15 reps", "Dumbbell Bench Press: 3 sets x 8-12 reps", "Dumbbell Shoulder Press: 3 sets x 10-15 reps","Tricep Dips: 3 sets x 12-15 reps"]
  },
  {
    head: "Day 6: Lower Body and Cardio",
    list: ["Leg Press: 3 sets x 10-15 reps", "Lunges: 3 sets x 12-16 reps (each leg)", "Leg Curls: 3 sets x 10-15 reps", "Cardiovascular exercise: 20-30 minutes"]
  },
  {
    head: "Day 7: Rest or Active Recovery",
    list: ["Rest day or engage in light activities like walking, yoga, or stretching."]
  },
  {
    head: "Nutrition Tips:",
    list:[
      "Consume a calorie surplus: Eat more calories than your body burns to promote weight gain.",
      "Include a balance of macronutrients: Proteins, carbohydrates, and healthy fats.",
      "Eat protein-rich foods: Include sources like lean meats, dairy, eggs, and legumes in your diet.",
      "Stay hydrated: Drink plenty of water throughout the day.",
      "Consider consulting a nutritionist for personalized advice."]
  }];
  const ilwPostPlan = [{
    workout: "Weeks 1-2: Foundation Building",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (30 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (40 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (20 minutes)",
        "Day 6: Lower Body and Cardio (30 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 3-4: Increasing Intensity",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (35 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (45 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (25 minutes)",
        "Day 6: Lower Body and Cardio (35 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 5-6: Progressive Overload",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (40 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (50 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (30 minutes)",
        "Day 6: Lower Body and Cardio (40 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 7-8: Refinement and Consistency",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (45 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (55 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (35 minutes)",
        "Day 6: Lower Body and Cardio (45 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
  workout: "Nutrition Tips (Throughout the 2 Months):",
  Days: [
  "Create a calorie deficit by consuming fewer calories than your body burns.",
  "Prioritize whole foods, lean proteins, vegetables, and whole grains.",
  "Stay hydrated and avoid sugary drinks and excessive snacking.",
  "Monitor your progress and adjust your calorie intake as needed.",
  "Remember, individual progress may vary, so listen to your body and make adjustments based on your needs. If you have any health concerns or conditions, it's advisable to consult with a healthcare professional or fitness expert before starting a new exercise program."

  ]
  }];
  const agwInitialPlan = [{
    head: "Day 1: Full Body Workout",
    list: ["Squats: 3 sets x 8-12 reps", "Bench Press: 3 sets x 8-12 reps", "Deadlifts: 3 sets x 8-12 reps", "Overhead Press: 3 sets x 8-12 reps"]
  },
  {
    head: "Day 2: Rest or Light Cardio",
    list: ["Rest day or engage in light cardiovascular exercise like walking or cycling for 30 minutes."]
  },
  {
    head: "Full Body Workout",
    list: ["Cardiovascular exercise (running, cycling, or elliptical): 30-45 minutes", "Planks: 3 sets x 30-60 seconds", "Russian Twists: 3 sets x 15-20 reps", "Leg Raises: 3 sets x 12-15 reps"]
  },
  {
    head: "Day 4: Rest or Light Cardio",
    list: ["Rest day or light cardiovascular exercise."]
  },
  {
    head: "Day 5: Upper Body Workout",
    list: ["Pull-ups or Lat Pulldowns: 3 sets x 8-12 reps", "Dumbbell Rows: 3 sets x 10-15 reps", "Dumbbell Bench Press: 3 sets x 8-12 reps", "Dumbbell Shoulder Press: 3 sets x 10-15 reps","Tricep Dips: 3 sets x 12-15 reps"]
  },
  {
    head: "Day 6: Lower Body and Cardio",
    list: ["Leg Press: 3 sets x 10-15 reps", "Lunges: 3 sets x 12-16 reps (each leg)", "Leg Curls: 3 sets x 10-15 reps", "Cardiovascular exercise: 20-30 minutes"]
  },
  {
    head: "Day 7: Rest or Active Recovery",
    list: ["Rest day or engage in light activities like walking, yoga, or stretching."]
  },
  {
    head: "Nutrition Tips:",
    list:[
      "Consume a calorie surplus: Eat more calories than your body burns to promote weight gain.",
      "Include a balance of macronutrients: Proteins, carbohydrates, and healthy fats.",
      "Eat protein-rich foods: Include sources like lean meats, dairy, eggs, and legumes in your diet.",
      "Stay hydrated: Drink plenty of water throughout the day.",
      "Consider consulting a nutritionist for personalized advice."]
  }];
  const agwPostPlan = [{
    workout: "Weeks 1-2: Foundation Building",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (30 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (40 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (20 minutes)",
        "Day 6: Lower Body and Cardio (30 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 3-4: Increasing Intensity",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (35 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (45 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (25 minutes)",
        "Day 6: Lower Body and Cardio (35 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 5-6: Progressive Overload",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (40 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (50 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (30 minutes)",
        "Day 6: Lower Body and Cardio (40 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 7-8: Refinement and Consistency",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (45 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (55 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (35 minutes)",
        "Day 6: Lower Body and Cardio (45 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
  workout: "Nutrition Tips (Throughout the 2 Months):",
  Days: [
  "Create a calorie deficit by consuming fewer calories than your body burns.",
  "Prioritize whole foods, lean proteins, vegetables, and whole grains.",
  "Stay hydrated and avoid sugary drinks and excessive snacking.",
  "Monitor your progress and adjust your calorie intake as needed.",
  "Remember, individual progress may vary, so listen to your body and make adjustments based on your needs. If you have any health concerns or conditions, it's advisable to consult with a healthcare professional or fitness expert before starting a new exercise program."

  ]
  }];
  const alwInitialPlan = [{
    head: "Day 1: Full Body Workout",
    list: ["Squats: 3 sets x 8-12 reps", "Bench Press: 3 sets x 8-12 reps", "Deadlifts: 3 sets x 8-12 reps", "Overhead Press: 3 sets x 8-12 reps"]
  },
  {
    head: "Day 2: Rest or Light Cardio",
    list: ["Rest day or engage in light cardiovascular exercise like walking or cycling for 30 minutes."]
  },
  {
    head: "Full Body Workout",
    list: ["Cardiovascular exercise (running, cycling, or elliptical): 30-45 minutes", "Planks: 3 sets x 30-60 seconds", "Russian Twists: 3 sets x 15-20 reps", "Leg Raises: 3 sets x 12-15 reps"]
  },
  {
    head: "Day 4: Rest or Light Cardio",
    list: ["Rest day or light cardiovascular exercise."]
  },
  {
    head: "Day 5: Upper Body Workout",
    list: ["Pull-ups or Lat Pulldowns: 3 sets x 8-12 reps", "Dumbbell Rows: 3 sets x 10-15 reps", "Dumbbell Bench Press: 3 sets x 8-12 reps", "Dumbbell Shoulder Press: 3 sets x 10-15 reps","Tricep Dips: 3 sets x 12-15 reps"]
  },
  {
    head: "Day 6: Lower Body and Cardio",
    list: ["Leg Press: 3 sets x 10-15 reps", "Lunges: 3 sets x 12-16 reps (each leg)", "Leg Curls: 3 sets x 10-15 reps", "Cardiovascular exercise: 20-30 minutes"]
  },
  {
    head: "Day 7: Rest or Active Recovery",
    list: ["Rest day or engage in light activities like walking, yoga, or stretching."]
  },
  {
    head: "Nutrition Tips:",
    list:[
      "Consume a calorie surplus: Eat more calories than your body burns to promote weight gain.",
      "Include a balance of macronutrients: Proteins, carbohydrates, and healthy fats.",
      "Eat protein-rich foods: Include sources like lean meats, dairy, eggs, and legumes in your diet.",
      "Stay hydrated: Drink plenty of water throughout the day.",
      "Consider consulting a nutritionist for personalized advice."]
  }];
  const alwPostPlan = [{
    workout: "Weeks 1-2: Foundation Building",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (30 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (40 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (20 minutes)",
        "Day 6: Lower Body and Cardio (30 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 3-4: Increasing Intensity",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (35 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (45 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (25 minutes)",
        "Day 6: Lower Body and Cardio (35 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 5-6: Progressive Overload",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (40 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (50 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (30 minutes)",
        "Day 6: Lower Body and Cardio (40 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
    workout: "Weeks 7-8: Refinement and Consistency",
    Days: [
        "Day 1: Full Body Strength Training + Cardio (45 minutes)",
        "Day 2: Rest or Light Cardio",
        "Day 3: Cardio and Core (55 minutes)",
        "Day 4: Rest or Light Cardio",
        "Day 5: HIIT Workout (35 minutes)",
        "Day 6: Lower Body and Cardio (45 minutes)",
        "Day 7: Rest or Active Recovery"
    ]
  },
  {
  workout: "Nutrition Tips (Throughout the 2 Months):",
  Days: [
  "Create a calorie deficit by consuming fewer calories than your body burns.",
  "Prioritize whole foods, lean proteins, vegetables, and whole grains.",
  "Stay hydrated and avoid sugary drinks and excessive snacking.",
  "Monitor your progress and adjust your calorie intake as needed.",
  "Remember, individual progress may vary, so listen to your body and make adjustments based on your needs. If you have any health concerns or conditions, it's advisable to consult with a healthcare professional or fitness expert before starting a new exercise program."

  ]
  }];
  //const initialPlan = document.querySelectorAll(".initialPlan-bwg");
  //const list = document.querySelectorAll(".list");

  const form = document.querySelector('.experience-form');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting

      const selectedLevel = document.getElementById('level').value;
      const selectedGoal = document.getElementById('goal').value;
      const weight = document.getElementById('weight').value;
      const height = document.getElementById('height').value;
      

      console.log(weight, height);
    

    
      if (selectedLevel === 'beginner' && selectedGoal === 'gain') {
          displayWorkoutPlans(bgwInitialPlan, bgwPostPlan);
          calculateBMI(weight,height);

      } else if (selectedLevel === 'advance' && selectedGoal === 'gain') {
        displayWorkoutPlans(igwInitialPlan, igwPostPlan);
        calculateBMI(weight,height);
      } else if (selectedLevel === 'pro' && selectedGoal === 'gain') {
        displayWorkoutPlans(agwInitialPlan, agwPostPlan);
        calculateBMI(weight,height);
      } else if (selectedLevel === 'beginner' && selectedGoal === 'loss') {
        displayWorkoutPlans(blwInitialPlan, blwPostPlan);
        calculateBMI(weight,height);
      } else if (selectedLevel === 'advance' && selectedGoal === 'loss') {
        displayWorkoutPlans(ilwInitialPlan, ilwPostPlan);
        calculateBMI(weight,height);
      } else if (selectedLevel === 'pro' && selectedGoal === 'loss') {
        displayWorkoutPlans(alwInitialPlan, alwPostPlan);
        calculateBMI(weight,height);
      }
      form.querySelectorAll('input, select').forEach(element => {
        element.value = '';
    });
  });
function calculateBMI(weight, height) {

  const fitnessContainer = document.querySelector(".bmiValue");

  fitnessContainer.innerHTML= "";
    const heightInMeters = height / 100;

  
    const bmi = weight / (heightInMeters * heightInMeters);

    const roundedBMI = parseFloat(bmi.toFixed(2));

    let status = "";

    if (roundedBMI < 18.5) {
        status = "Underweight";
    } else if (roundedBMI >= 18.5 && roundedBMI < 24.9) {
        status = "Normal (Healthy) Weight";
    } else if (roundedBMI >= 25 && roundedBMI < 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }
    console.log(status, roundedBMI)

    const bmivalue = document.createElement("div");
    const head1 = document.createElement("h1");
    const head2 = document.createElement("h1");
    head1.innerHTML = roundedBMI;
    head2.innerHTML = status;
    bmivalue.appendChild(head1);
    bmivalue.appendChild(head2);
    fitnessContainer.appendChild(bmivalue);

    let targetWeightLower;
    let targetWeightUpper;
    const feedBack = document.createElement("h2");

  
    if (roundedBMI < 18.5) {
      targetWeightLower = 18.5 * heightInMeters * heightInMeters;
      feedBack.innerHTML =  `Underweight - Need to improve weight. Target weight: ${targetWeightLower.toFixed(2)} kg`;
    } else if (roundedBMI < 24.9) {
      feedBack.innerHTML = "Normal weight - Healthy range";
    } else if (roundedBMI < 29.9) {
      console.log("28.31");
      targetWeightUpper = 24.9 * heightInMeters * heightInMeters;
      feedBack.innerHTML =  `Overweight - Need to reduce weight. Target weight: ${targetWeightUpper.toFixed(2)} kg`;
    } else {
      targetWeightUpper = 24.9 * heightInMeters * heightInMeters;
      feedBack.innerHTML =  `Obese - Need to reduce weight. Target weight: ${targetWeightUpper.toFixed(2)} kg`;
    }
    bmivalue.appendChild(feedBack);
    fitnessContainer.appendChild(bmivalue);




}

  function displayWorkoutPlans(initialPlan, PostPlan){

    console.log("function called");

    const initialPlanContainer = document.querySelector('.initialPlan');
      const postPlanContainer = document.querySelector('.PostPlan');
      initialPlanContainer.style.display = "block";
      postPlanContainer.style.display = "block";
      //const PostNutrition = document.querySelector(".PostPlan-bwg-list")

      initialPlanContainer.innerHTML = ""; // Clear previous content
      postPlanContainer.innerHTML = ""; // Clear previous content

      let i=0;

      while(i<initialPlan.length){
        const row = document.createElement("div");
        const head = document.createElement("h1");
        head.innerHTML = initialPlan[i].head;
        head.classList = "h1";
        let j=0;
        const ulist = document.createElement("ul");
        ulist.classList= "list";
        while(j<initialPlan[i].list.length){
          
          const list = document.createElement("li");
          list.innerHTML =initialPlan[i].list[j];
          
          ulist.appendChild(list);
          j++;
        }
        row.appendChild(head);
        row.appendChild(ulist);
        initialPlanContainer.appendChild(row);
        i++;
      }
      let l=0;
      while(l<PostPlan.length-1){
        const row = document.createElement("div");
        //row.classList = "PostPlan-bwg"
        const head = document.createElement("h1");
        head.innerHTML = PostPlan[l]. workout;
        row.appendChild(head);
        const table = document.createElement("table");

        const trheader = document.createElement("tr");
        const td1header = document.createElement("td");
        const td2header = document.createElement("td");
        td1header.innerHTML = "Day";
        td2header.innerHTML= "Workout Plan";
        trheader.appendChild(td1header);
        trheader.appendChild(td2header);
        table.appendChild(trheader);
        row.appendChild(table);
        postPlanContainer.appendChild(row);

        let k =0;

        while(k<PostPlan[l].Days.length){
          const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
          td1.innerHTML = k+1;
          td2.innerHTML = PostPlan[l].Days[k];
          tr.appendChild(td1);
          tr.appendChild(td2);
          table.appendChild(tr);
        row.appendChild(table);
          k++;
        }
        l++;
      }
      const row = document.createElement("div");
        //row.classList = "PostPlan-bwg"
        const head = document.createElement("h1");
        head.innerHTML = PostPlan[l]. workout;
        row.appendChild(head);
        const table = document.createElement("table");
        let k =0;

        while(k<PostPlan[PostPlan.length-1].Days.length){
          const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
          td1.innerHTML = k+1;
          td2.innerHTML = PostPlan[PostPlan.length-1].Days[k];
          tr.appendChild(td1);
          tr.appendChild(td2);
          table.appendChild(tr);
          k++;
        }
        row.appendChild(table);
        postPlanContainer.appendChild(row);

  }

  const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
    //console.log("show updated content");
}
showNotes();

function updateStorage(){
   // console.log("Updating storage");
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(event){
    //console.log("Click event fired");
    if(event.target.tagName=== "IMG"){
        event.target.parentElement.remove();
       // updateStorage();

    }else if(event.target.tagName === "p"){
        event.target.onkeyup = function () {
          //  updateStorage();
        };
    }
})
 
document.addEventListener("keydown", event =>{
  //  console.log("Keydown event fired");
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
       // updateStorage();
    }
})

// Get DOM elements
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopWatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    }
    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    isRunning = false;
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = formatTime(hours, minutes, seconds);
    display.textContent = formattedTime;
}

function formatTime(hours, minutes, seconds) {
    return (
        padZero(hours) + ':' +
        padZero(minutes) + ':' +
        padZero(seconds)
    );
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}

// Event listeners
startStopBtn.addEventListener('click', startStopWatch);
resetBtn.addEventListener('click', resetStopwatch);


const exercises = {
  chest: [
    "Bench Press (Flat, Incline, Decline)",
    "Dumbbell Flyes",
    "Push-Ups",
    "Cable Crossover",
    "Chest Press Machine"
],
  back: [
    "Deadlifts (Conventional, Sumo)",
    "Bent Over Rows",
    "Lat Pulldowns",
    "Pull-Ups",
    "T-Bar Rows",
    "Face Pulls"
],
  legs: [
      "Squats (Back Squats, Front Squats)",
      "Lunges (Walking Lunges, Reverse Lunges)",
      "Leg Press",
      "Leg Extensions",
      "Leg Curls",
      "Calf Raises"
  ],
  shoulders: [
      "Overhead Press (Barbell, Dumbbell)",
      "Lateral Raises",
      "Front Raises",
      "Shrugs",
      "Face Pulls"
  ],
  arms: [
      "Bicep Curls (Barbell, Dumbbell, Preacher Curls)",
      "Tricep Dips",
      "Tricep Pushdowns",
      "Hammer Curls",
      "Skull Crushers"
  ],
  core: [
      "Planks",
      "Russian Twists",
      "Leg Raises",
      "Cable Crunches",
      "Oblique Crunches"
  ],
  cardiovascular: [
      "Running",
      "Cycling",
      "Rowing",
      "Elliptical Training",
      "High-Intensity Interval Training (HIIT)"
  ],
  fullBody: [
      "Deadlifts",
      "Squats",
      "Clean and Jerk",
      "Snatch",
      "Burpees"
  ]
};

const chest = document.getElementById("chest");
const Back = document.getElementById("back");
const legs = document.getElementById("legs");
const shoulders = document.getElementById("Shoulders");
const arms = document.getElementById("Arms");
const core = document.getElementById("core");
const cardiovascular = document.getElementById("Cardiovascular");
const fullbody = document.getElementById("fullBody");

chest.addEventListener("click", function() {
  variation(exercises.chest, chest);
});

Back.addEventListener("click", function() {
  variation(exercises.back, Back);
});

legs.addEventListener("click", function() {
  variation(exercises.legs, legs);
});

shoulders.addEventListener("click", function() {
  variation(exercises.shoulders, shoulders);
});

arms.addEventListener("click", function() {
  variation(exercises.arms, arms);
});

core.addEventListener("click", function() {
  variation(exercises.core, core);
});

cardiovascular.addEventListener("click", function() {
  variation(exercises.cardiovascular, cardiovascular);
});

fullbody.addEventListener("click", function() {
  variation(exercises.fullBody, fullbody);
});

function variation(variation, exercise) {
  // Check if there is already an exercise list
  const existingList = exercise.querySelector(".list-exercise");
  
  if (existingList) {
      existingList.style.display = (existingList.style.display === 'none') ? 'block' : 'none';
  } else {
      const row = document.createElement("div");
      const ulist = document.createElement("ul");
      ulist.classList = "list-exercise";

      variation.forEach(exerciseItem => {
          const list = document.createElement("li");
          list.innerHTML = exerciseItem;
          ulist.appendChild(list);
      });

      row.appendChild(ulist);
      exercise.appendChild(row);
  }
}



