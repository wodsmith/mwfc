import type { WorkoutSchedule } from "@/types/schedule";

// Competition Corner API URLs for live data
export const WORKOUT_API_URLS = {
  1: "https://competitioncorner.net/api2/v1/schedule/workout/108521?divisionId=all", // Sawtooth
  2: "https://competitioncorner.net/api2/v1/schedule/workout/108522?divisionId=all", // Steelhead
  3: "https://competitioncorner.net/api2/v1/schedule/workout/111061?divisionId=all", // Spud Nation
  4: "https://competitioncorner.net/api2/v1/schedule/workout/111063?divisionId=all", // Bronco
  5: "https://competitioncorner.net/api2/v1/schedule/workout/111064?divisionId=all", // Vandal
  6: "https://competitioncorner.net/api2/v1/schedule/workout/111065?divisionId=all", // Mountain West Tommy V
} as const;

export const workoutSchedules: WorkoutSchedule[] = [
  {
    "id": 1,
    "day": "Friday",
    "workoutNumber": 1,
    "workoutName": "Sawtooth (Propath Financial)",
    "timeRange": "09:00 AM - 12:33 PM",
    "location": "Main Stage",
    "heats": [
      {
        "heatNumber": 1,
        "time": "09:00 AM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Breakfast Dinner",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 2,
            "competitor": "Cheez-It Extra Toasty",
            "affiliate": "ROCK CANYON CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 3,
            "competitor": "Feel the McBurn",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 4,
            "competitor": "Fitz and Furious",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 5,
            "competitor": "Geweck Yourselves",
            "affiliate": "WILDLAND CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 6,
            "competitor": "Let ‘em Cook",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 7,
            "competitor": "Richardson Rebels",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 8,
            "competitor": "Sin Miedo",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Sore Losers",
            "affiliate": "WILDLAND CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 10,
            "competitor": "The Rex Factor",
            "affiliate": "THE PACK 208",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Blue Eyed Beasts",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "I’ve got a headache",
            "affiliate": "SNAKERIVER CROSSFIT",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Plus Ultra",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Squat me baby!!",
            "affiliate": "SUMMIT FITNESS",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Team Nancy/Resting Belnap Face (RBF)",
            "affiliate": "CROSSFIT E3",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "The Zzz's ",
            "affiliate": "INDEPENDENT",
            "division": "Masters Co-Ed - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 2,
        "time": "09:18 AM",
        "lanes": [
          {
            "lane": 1,
            "competitor": " Verdantside",
            "affiliate": "INDEPENDENT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 2,
            "competitor": "‘96 Chicago Bulls",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 3,
            "competitor": "AG Fan Club",
            "affiliate": "GRAYT FITNESS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 4,
            "competitor": "Daddy with a Phatty",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 5,
            "competitor": "Em and M",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 6,
            "competitor": "GCS 3",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 7,
            "competitor": "Goofy Goobers",
            "affiliate": "FORGE TRAINING AND PERFORMANCE",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 8,
            "competitor": "Mules of Co-Pain ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 9,
            "competitor": "Queen and Jerk",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 10,
            "competitor": "Rodeo Rhymers",
            "affiliate": "HYALITE CROSSFIT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 11,
            "competitor": "TEAM DAY ONES",
            "affiliate": "YCF TRAINING CENTER",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 12,
            "competitor": "Trident Athletics",
            "affiliate": "TRIDENT ATHLETICS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 13,
            "competitor": "Two Toned Thunder",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 14,
            "competitor": "Young Guns & Wise Buns",
            "affiliate": "RED STICK CROSSFIT",
            "division": "Co-Ed - RX"
          }
        ]
      },
      {
        "heatNumber": 3,
        "time": "09:36 AM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Aged to Perfection",
            "affiliate": "VALLEY STRENGTH WEIGHTLIFTING",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 2,
            "competitor": "HGR CBD Athletics ",
            "affiliate": "PROJECT FITNESS",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 3,
            "competitor": "Nooners ",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 4,
            "competitor": "Sigma and Gyat",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 5,
            "competitor": "Battle Born and Worn",
            "affiliate": "CROSSFIT EVERYDAY HEROES",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Beat Boxers",
            "affiliate": "EAGLE CAP CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Bubba Needs Help",
            "affiliate": "CHAOS STRENGTH & CONDITIONING",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Cam and Kenn ",
            "affiliate": "CROSSFIT SAINT HELENS",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Deadlifts & Chill",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "DNR",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Dos Chanchos ",
            "affiliate": "CANVAS CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Grass Fed Grass Finished ",
            "affiliate": "CROSSFIT DANBURY",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Hustle and Muscle ",
            "affiliate": "CROSSFIT RICHLAND",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Misery Loves Company",
            "affiliate": "CROSSFIT AMBROSE",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "No Rep? No whey!",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Row-mates for Life",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Co-Ed - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 4,
        "time": "09:54 AM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Swole in Spirit",
            "affiliate": "THE PACK 208",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "SWOLEMATES ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "The Frenchies ",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Thicc and Tired",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "unTAYmable ",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "What Would Froning Do?",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "WOD my name out yo mouth ",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Ambiguously Qualified CrossFit Duo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Check Engine",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Dad Bod Dynasty",
            "affiliate": "NATURAL SELECTION CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Fullerton's Old School ",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "GOOD",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Irish Wristwatch ",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "OBSOLETE",
            "affiliate": "SKOL CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Red",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Thruster? I hardly know her",
            "affiliate": "INDEPENDENT",
            "division": "Masters Men's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 5,
        "time": "10:12 AM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "10 Kids Later...",
            "affiliate": "THE PACK 208",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Apple Bottom Cleans",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Barbell Bros",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Built in Black",
            "affiliate": "INDEPENDENT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Captain Baby",
            "affiliate": "LEAF (LEADING EDGE ATHLETICS AND FITNESS)",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Gen X Flex",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Iron Valkyrie Sisters",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Not Fast Just Furious",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Slay All Day",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Worst Pace Scenario",
            "affiliate": "28FITNESS",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Mexican Jumping BEANS",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Peaked in High School",
            "affiliate": "CLARITY FIT",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "Team Puma Sock",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 6,
        "time": "10:30 AM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Barbell Babes",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 2,
            "competitor": "bustin",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 3,
            "competitor": "Fireside Centurions",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 4,
            "competitor": "Northside Thugs N Harmony",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 5,
            "competitor": "Old & Broken",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 6,
            "competitor": "SPUD BROTHERS",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 7,
            "competitor": "Super Snatch Bros.",
            "affiliate": "IRONDEN",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 8,
            "competitor": "T & C",
            "affiliate": "WASATCH CROSSFIT",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 9,
            "competitor": "Team PROPATH",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 10,
            "competitor": "Timmy and the Brain ",
            "affiliate": "RCF TACOMA",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 11,
            "competitor": "‘90 problems, ‘04 ain’t one",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 12,
            "competitor": "Biggie Smalls",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 13,
            "competitor": "Blind Date",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Men's - RX"
          },
          {
            "lane": 14,
            "competitor": "Boonie Bros",
            "affiliate": "INDEPENDENT",
            "division": "Men's - RX"
          },
          {
            "lane": 15,
            "competitor": "CHAOS BOYS ",
            "affiliate": "CHAOS STRENGTH & CONDITIONING",
            "division": "Men's - RX"
          },
          {
            "lane": 16,
            "competitor": "FYB",
            "affiliate": "FOUR RIVERS CROSSFIT",
            "division": "Men's - RX"
          }
        ]
      },
      {
        "heatNumber": 7,
        "time": "10:48 AM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Golden Big Backs",
            "affiliate": "OSO CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 3,
            "competitor": "GYMREAPERS",
            "affiliate": "KULAK CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 4,
            "competitor": "Lift me baby one more time",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 5,
            "competitor": "Quick & Thick",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - RX"
          },
          {
            "lane": 6,
            "competitor": "R.A.D Boys",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 7,
            "competitor": "R.A.D Dads",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - RX"
          },
          {
            "lane": 8,
            "competitor": "RX-ish",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - RX"
          },
          {
            "lane": 9,
            "competitor": "STANDIN ON BIDNESS (AT THE BEACH)",
            "affiliate": "CROSSFIT FORT VANCOUVER",
            "division": "Men's - RX"
          },
          {
            "lane": 10,
            "competitor": "Stud Puffins",
            "affiliate": "CROSSFIT CASUAL",
            "division": "Men's - RX"
          },
          {
            "lane": 11,
            "competitor": "Team RX minus",
            "affiliate": "ROCK CANYON CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 12,
            "competitor": "The Power Snatch Kids ",
            "affiliate": "THE PACK 208",
            "division": "Men's - RX"
          },
          {
            "lane": 13,
            "competitor": "Titanic Swim Team",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - RX"
          },
          {
            "lane": 14,
            "competitor": "UXO",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 15,
            "competitor": "White Lotus",
            "affiliate": "CROSSFIT HYPERION",
            "division": "Men's - RX"
          }
        ]
      },
      {
        "heatNumber": 8,
        "time": "11:06 AM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Burpees and Biscuits",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Burrito Bros",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Factory Doughnutties",
            "affiliate": "THE GAUNTLET CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Fourth and WOD",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Grab em by the dumbbells ",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "High Bar Low Bar ",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Howen ",
            "affiliate": "EAGLECAP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Mileage & Mayhem",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Peter Parkers",
            "affiliate": "EAGLECAP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Pupsiki",
            "affiliate": "GAINS GYM ",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Stratton Oakmont Crossfit",
            "affiliate": "CROSSFIT RAVAGE",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Strong Independent Men",
            "affiliate": "CODE 541",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Sugar Daddies",
            "affiliate": "STREET PARKING DADS",
            "division": "Men's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 9,
        "time": "11:24 AM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Summit Seekers ",
            "affiliate": "INDEPENDENT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Team Nonchalant",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Team saiyan ",
            "affiliate": "KULAK CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "The Swolemates",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "The Team That Shall Not Be Named",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Train Town",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Twin turbo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Brown and Down",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Gym Bruvz",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Rookie"
          },
          {
            "lane": 10,
            "competitor": "Last Minute Lifters",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Rice & Beans",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Rowing Pains",
            "affiliate": "THE PACK 208",
            "division": "Men's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Sweaty and Regrety",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "The team, the team, go team",
            "affiliate": "INDEPENDENT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 15,
            "competitor": "Two Guys-Big Thighs",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - Rookie"
          },
          {
            "lane": 16,
            "competitor": "Young Bull & Old Goat",
            "affiliate": "CROSSFIT REFUGE",
            "division": "Men's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 10,
        "time": "11:42 AM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "2 Snatched 2 Quit",
            "affiliate": "CROSSFIT INNER CHAMBER",
            "division": "Women's - Rookie"
          },
          {
            "lane": 2,
            "competitor": "Bend and Snap",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 3,
            "competitor": "Chalk Dirty to me ",
            "affiliate": "THE PACK CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 4,
            "competitor": "Dog Mom Duo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 5,
            "competitor": "Flex Appeal ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 6,
            "competitor": "Floss n' Fades",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 7,
            "competitor": "Grit & Grace",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 8,
            "competitor": "Kettlebelles",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Women's - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Look WOD You Made Me Do",
            "affiliate": "LEAF (LEADING EDGE ATHLETICS AND FITNESS)",
            "division": "Women's - Rookie"
          },
          {
            "lane": 10,
            "competitor": "Masters in Motion",
            "affiliate": "CROSSFIT LEAF",
            "division": "Women's - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Mother Hustlers",
            "affiliate": "THE PACK 208",
            "division": "Women's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Muscle Milkmaids",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Oh Snatch!",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "The Cougar and the Kitten",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 15,
            "competitor": "We Were On A Break",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Women's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 11,
        "time": "12:00 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Critter Gitters",
            "affiliate": "INDEPENDENT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Double Wonders",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Down Bad Crying at the Gym",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Flexual Healing",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Gabz and Make it Rainz",
            "affiliate": "CROSSFIT FORGE 208",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Grins and Wins",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Hot Mom Era ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Hustle & Muscle ",
            "affiliate": "FOUR RIVERS CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Long Distance Lifters",
            "affiliate": "3-46 GRIT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Misplaced Masters",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "PR or ER",
            "affiliate": "CAMELBACK CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Social Hour",
            "affiliate": "BOISE CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "The Power Puff Girls",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Thunder & Lightning",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Verdant Vixens",
            "affiliate": "CROSSFIT VERDANT NORTH",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Woddesses ",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Women's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 12,
        "time": "12:18 PM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Arbor McFit",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 3,
            "competitor": "Hannah Montana",
            "affiliate": "CROSSFIT FORT VANCOUVER",
            "division": "Women's - RX"
          },
          {
            "lane": 4,
            "competitor": "Hot Mess Express",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - RX"
          },
          {
            "lane": 5,
            "competitor": "Jacked in the Box ",
            "affiliate": "NEBO CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 6,
            "competitor": "M&M",
            "affiliate": "WASATCH CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 7,
            "competitor": "M&M Mayhem",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - RX"
          },
          {
            "lane": 8,
            "competitor": "Naddy the baddies ",
            "affiliate": "KULAK CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 9,
            "competitor": "Northside Naptime Ninjas",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - RX"
          },
          {
            "lane": 10,
            "competitor": "Not Dying, Just Gestating",
            "affiliate": "INDEPENDENT",
            "division": "Women's - RX"
          },
          {
            "lane": 11,
            "competitor": "O’Doyle Rules",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 12,
            "competitor": "Power Princesses ",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 13,
            "competitor": "Quad Squad",
            "affiliate": "SALTY HIVE CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 14,
            "competitor": "Snatching with Sirens",
            "affiliate": "CROSSFIT RAVAGE",
            "division": "Women's - RX"
          },
          {
            "lane": 15,
            "competitor": "SuperMom Squad ",
            "affiliate": "TRIDENT ATHLETICS",
            "division": "Women's - RX"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "day": "Friday",
    "workoutNumber": 2,
    "workoutName": "Steelhead (Scheels)",
    "timeRange": "01:06 PM - 04:03 PM",
    "location": "Main Stage",
    "heats": [
      {
        "heatNumber": 1,
        "time": "01:06 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Breakfast Dinner",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 2,
            "competitor": "Cheez-It Extra Toasty",
            "affiliate": "ROCK CANYON CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 3,
            "competitor": "Feel the McBurn",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 4,
            "competitor": "Fitz and Furious",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 5,
            "competitor": "Geweck Yourselves",
            "affiliate": "WILDLAND CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 6,
            "competitor": "Let ‘em Cook",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 7,
            "competitor": "Richardson Rebels",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 8,
            "competitor": "Sin Miedo",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Sore Losers",
            "affiliate": "WILDLAND CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 10,
            "competitor": "The Rex Factor",
            "affiliate": "THE PACK 208",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Blue Eyed Beasts",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "I’ve got a headache",
            "affiliate": "SNAKERIVER CROSSFIT",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Plus Ultra",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Squat me baby!!",
            "affiliate": "SUMMIT FITNESS",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Team Nancy/Resting Belnap Face (RBF)",
            "affiliate": "CROSSFIT E3",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "The Zzz's ",
            "affiliate": "INDEPENDENT",
            "division": "Masters Co-Ed - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 2,
        "time": "01:21 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": " Verdantside",
            "affiliate": "INDEPENDENT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 2,
            "competitor": "‘96 Chicago Bulls",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 3,
            "competitor": "AG Fan Club",
            "affiliate": "GRAYT FITNESS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 4,
            "competitor": "Daddy with a Phatty",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 5,
            "competitor": "Em and M",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 6,
            "competitor": "GCS 3",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 7,
            "competitor": "Goofy Goobers",
            "affiliate": "FORGE TRAINING AND PERFORMANCE",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 8,
            "competitor": "Mules of Co-Pain ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 9,
            "competitor": "Queen and Jerk",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 10,
            "competitor": "Rodeo Rhymers",
            "affiliate": "HYALITE CROSSFIT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 11,
            "competitor": "TEAM DAY ONES",
            "affiliate": "YCF TRAINING CENTER",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 12,
            "competitor": "Trident Athletics",
            "affiliate": "TRIDENT ATHLETICS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 13,
            "competitor": "Two Toned Thunder",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 14,
            "competitor": "Young Guns & Wise Buns",
            "affiliate": "RED STICK CROSSFIT",
            "division": "Co-Ed - RX"
          }
        ]
      },
      {
        "heatNumber": 3,
        "time": "01:36 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Aged to Perfection",
            "affiliate": "VALLEY STRENGTH WEIGHTLIFTING",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 2,
            "competitor": "HGR CBD Athletics ",
            "affiliate": "PROJECT FITNESS",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 3,
            "competitor": "Nooners ",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 4,
            "competitor": "Sigma and Gyat",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 5,
            "competitor": "Battle Born and Worn",
            "affiliate": "CROSSFIT EVERYDAY HEROES",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Beat Boxers",
            "affiliate": "EAGLE CAP CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Bubba Needs Help",
            "affiliate": "CHAOS STRENGTH & CONDITIONING",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Cam and Kenn ",
            "affiliate": "CROSSFIT SAINT HELENS",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Deadlifts & Chill",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "DNR",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Dos Chanchos ",
            "affiliate": "CANVAS CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Grass Fed Grass Finished ",
            "affiliate": "CROSSFIT DANBURY",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Hustle and Muscle ",
            "affiliate": "CROSSFIT RICHLAND",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Misery Loves Company",
            "affiliate": "CROSSFIT AMBROSE",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "No Rep? No whey!",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Row-mates for Life",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Co-Ed - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 4,
        "time": "01:51 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Swole in Spirit",
            "affiliate": "THE PACK 208",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "SWOLEMATES ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "The Frenchies ",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Thicc and Tired",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "unTAYmable ",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "What Would Froning Do?",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "WOD my name out yo mouth ",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Ambiguously Qualified CrossFit Duo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Check Engine",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Dad Bod Dynasty",
            "affiliate": "NATURAL SELECTION CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Fullerton's Old School ",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "GOOD",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Irish Wristwatch ",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "OBSOLETE",
            "affiliate": "SKOL CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Red",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Thruster? I hardly know her",
            "affiliate": "INDEPENDENT",
            "division": "Masters Men's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 5,
        "time": "02:06 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "10 Kids Later...",
            "affiliate": "THE PACK 208",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Apple Bottom Cleans",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Barbell Bros",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Built in Black",
            "affiliate": "INDEPENDENT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Captain Baby",
            "affiliate": "LEAF (LEADING EDGE ATHLETICS AND FITNESS)",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Gen X Flex",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Iron Valkyrie Sisters",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Not Fast Just Furious",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Slay All Day",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Worst Pace Scenario",
            "affiliate": "28FITNESS",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Mexican Jumping BEANS",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Peaked in High School",
            "affiliate": "CLARITY FIT",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "Team Puma Sock",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 6,
        "time": "02:21 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Barbell Babes",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 2,
            "competitor": "bustin",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 3,
            "competitor": "Fireside Centurions",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 4,
            "competitor": "Northside Thugs N Harmony",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 5,
            "competitor": "Old & Broken",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 6,
            "competitor": "SPUD BROTHERS",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 7,
            "competitor": "Super Snatch Bros.",
            "affiliate": "IRONDEN",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 8,
            "competitor": "T & C",
            "affiliate": "WASATCH CROSSFIT",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 9,
            "competitor": "Team PROPATH",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 10,
            "competitor": "Timmy and the Brain ",
            "affiliate": "RCF TACOMA",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 11,
            "competitor": "‘90 problems, ‘04 ain’t one",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 12,
            "competitor": "Biggie Smalls",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 13,
            "competitor": "Blind Date",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Men's - RX"
          },
          {
            "lane": 14,
            "competitor": "Boonie Bros",
            "affiliate": "INDEPENDENT",
            "division": "Men's - RX"
          },
          {
            "lane": 15,
            "competitor": "CHAOS BOYS ",
            "affiliate": "CHAOS STRENGTH & CONDITIONING",
            "division": "Men's - RX"
          },
          {
            "lane": 16,
            "competitor": "FYB",
            "affiliate": "FOUR RIVERS CROSSFIT",
            "division": "Men's - RX"
          }
        ]
      },
      {
        "heatNumber": 7,
        "time": "02:36 PM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Golden Big Backs",
            "affiliate": "OSO CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 3,
            "competitor": "GYMREAPERS",
            "affiliate": "KULAK CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 4,
            "competitor": "Lift me baby one more time",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 5,
            "competitor": "Quick & Thick",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - RX"
          },
          {
            "lane": 6,
            "competitor": "R.A.D Boys",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 7,
            "competitor": "R.A.D Dads",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - RX"
          },
          {
            "lane": 8,
            "competitor": "RX-ish",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - RX"
          },
          {
            "lane": 9,
            "competitor": "STANDIN ON BIDNESS (AT THE BEACH)",
            "affiliate": "CROSSFIT FORT VANCOUVER",
            "division": "Men's - RX"
          },
          {
            "lane": 10,
            "competitor": "Stud Puffins",
            "affiliate": "CROSSFIT CASUAL",
            "division": "Men's - RX"
          },
          {
            "lane": 11,
            "competitor": "Team RX minus",
            "affiliate": "ROCK CANYON CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 12,
            "competitor": "The Power Snatch Kids ",
            "affiliate": "THE PACK 208",
            "division": "Men's - RX"
          },
          {
            "lane": 13,
            "competitor": "Titanic Swim Team",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - RX"
          },
          {
            "lane": 14,
            "competitor": "UXO",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 15,
            "competitor": "White Lotus",
            "affiliate": "CROSSFIT HYPERION",
            "division": "Men's - RX"
          }
        ]
      },
      {
        "heatNumber": 8,
        "time": "02:51 PM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Burpees and Biscuits",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Burrito Bros",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Factory Doughnutties",
            "affiliate": "THE GAUNTLET CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Fourth and WOD",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Grab em by the dumbbells ",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "High Bar Low Bar ",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Howen ",
            "affiliate": "EAGLECAP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Mileage & Mayhem",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Peter Parkers",
            "affiliate": "EAGLECAP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Pupsiki",
            "affiliate": "GAINS GYM ",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Stratton Oakmont Crossfit",
            "affiliate": "CROSSFIT RAVAGE",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Strong Independent Men",
            "affiliate": "CODE 541",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Sugar Daddies",
            "affiliate": "STREET PARKING DADS",
            "division": "Men's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 9,
        "time": "03:06 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Summit Seekers ",
            "affiliate": "INDEPENDENT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Team Nonchalant",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Team saiyan ",
            "affiliate": "KULAK CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "The Swolemates",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "The Team That Shall Not Be Named",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Train Town",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Twin turbo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Brown and Down",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Gym Bruvz",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Rookie"
          },
          {
            "lane": 10,
            "competitor": "Last Minute Lifters",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Rice & Beans",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Rowing Pains",
            "affiliate": "THE PACK 208",
            "division": "Men's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Sweaty and Regrety",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "The team, the team, go team",
            "affiliate": "INDEPENDENT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 15,
            "competitor": "Two Guys-Big Thighs",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - Rookie"
          },
          {
            "lane": 16,
            "competitor": "Young Bull & Old Goat",
            "affiliate": "CROSSFIT REFUGE",
            "division": "Men's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 10,
        "time": "03:21 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "2 Snatched 2 Quit",
            "affiliate": "CROSSFIT INNER CHAMBER",
            "division": "Women's - Rookie"
          },
          {
            "lane": 2,
            "competitor": "Bend and Snap",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 3,
            "competitor": "Chalk Dirty to me ",
            "affiliate": "THE PACK CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 4,
            "competitor": "Dog Mom Duo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 5,
            "competitor": "Flex Appeal ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 6,
            "competitor": "Floss n' Fades",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 7,
            "competitor": "Grit & Grace",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 8,
            "competitor": "Kettlebelles",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Women's - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Look WOD You Made Me Do",
            "affiliate": "LEAF (LEADING EDGE ATHLETICS AND FITNESS)",
            "division": "Women's - Rookie"
          },
          {
            "lane": 10,
            "competitor": "Masters in Motion",
            "affiliate": "CROSSFIT LEAF",
            "division": "Women's - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Mother Hustlers",
            "affiliate": "THE PACK 208",
            "division": "Women's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Muscle Milkmaids",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Oh Snatch!",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "The Cougar and the Kitten",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 15,
            "competitor": "We Were On A Break",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Women's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 11,
        "time": "03:36 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Critter Gitters",
            "affiliate": "INDEPENDENT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Double Wonders",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Down Bad Crying at the Gym",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Flexual Healing",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Gabz and Make it Rainz",
            "affiliate": "CROSSFIT FORGE 208",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Grins and Wins",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Hot Mom Era ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Hustle & Muscle ",
            "affiliate": "FOUR RIVERS CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Long Distance Lifters",
            "affiliate": "3-46 GRIT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Misplaced Masters",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "PR or ER",
            "affiliate": "CAMELBACK CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Social Hour",
            "affiliate": "BOISE CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "The Power Puff Girls",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Thunder & Lightning",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Verdant Vixens",
            "affiliate": "CROSSFIT VERDANT NORTH",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Woddesses ",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Women's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 12,
        "time": "03:51 PM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Arbor McFit",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 3,
            "competitor": "Hannah Montana",
            "affiliate": "CROSSFIT FORT VANCOUVER",
            "division": "Women's - RX"
          },
          {
            "lane": 4,
            "competitor": "Hot Mess Express",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - RX"
          },
          {
            "lane": 5,
            "competitor": "Jacked in the Box ",
            "affiliate": "NEBO CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 6,
            "competitor": "M&M",
            "affiliate": "WASATCH CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 7,
            "competitor": "M&M Mayhem",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - RX"
          },
          {
            "lane": 8,
            "competitor": "Naddy the baddies ",
            "affiliate": "KULAK CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 9,
            "competitor": "Northside Naptime Ninjas",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - RX"
          },
          {
            "lane": 10,
            "competitor": "Not Dying, Just Gestating",
            "affiliate": "INDEPENDENT",
            "division": "Women's - RX"
          },
          {
            "lane": 11,
            "competitor": "O’Doyle Rules",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 12,
            "competitor": "Power Princesses ",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 13,
            "competitor": "Quad Squad",
            "affiliate": "SALTY HIVE CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 14,
            "competitor": "Snatching with Sirens",
            "affiliate": "CROSSFIT RAVAGE",
            "division": "Women's - RX"
          },
          {
            "lane": 15,
            "competitor": "SuperMom Squad ",
            "affiliate": "TRIDENT ATHLETICS",
            "division": "Women's - RX"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "day": "Friday",
    "workoutNumber": 3,
    "workoutName": "\"Spud Nation\" (RXSG)",
    "timeRange": "04:36 PM - 07:09 PM",
    "location": "Main Stage",
    "heats": [
      {
        "heatNumber": 1,
        "time": "04:36 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Breakfast Dinner",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 2,
            "competitor": "Cheez-It Extra Toasty",
            "affiliate": "ROCK CANYON CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 3,
            "competitor": "Feel the McBurn",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 4,
            "competitor": "Fitz and Furious",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 5,
            "competitor": "Geweck Yourselves",
            "affiliate": "WILDLAND CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 6,
            "competitor": "Let ‘em Cook",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 7,
            "competitor": "Richardson Rebels",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 8,
            "competitor": "Sin Miedo",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Sore Losers",
            "affiliate": "WILDLAND CROSSFIT",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 10,
            "competitor": "The Rex Factor",
            "affiliate": "THE PACK 208",
            "division": "Co-Ed - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Blue Eyed Beasts",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "I’ve got a headache",
            "affiliate": "SNAKERIVER CROSSFIT",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Plus Ultra",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Squat me baby!!",
            "affiliate": "SUMMIT FITNESS",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Team Nancy/Resting Belnap Face (RBF)",
            "affiliate": "CROSSFIT E3",
            "division": "Masters Co-Ed - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "The Zzz's ",
            "affiliate": "INDEPENDENT",
            "division": "Masters Co-Ed - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 2,
        "time": "04:49 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": " Verdantside",
            "affiliate": "INDEPENDENT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 2,
            "competitor": "‘96 Chicago Bulls",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 3,
            "competitor": "AG Fan Club",
            "affiliate": "GRAYT FITNESS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 4,
            "competitor": "Daddy with a Phatty",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 5,
            "competitor": "Em and M",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 6,
            "competitor": "GCS 3",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 7,
            "competitor": "Goofy Goobers",
            "affiliate": "FORGE TRAINING AND PERFORMANCE",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 8,
            "competitor": "Mules of Co-Pain ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 9,
            "competitor": "Queen and Jerk",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 10,
            "competitor": "Rodeo Rhymers",
            "affiliate": "HYALITE CROSSFIT",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 11,
            "competitor": "TEAM DAY ONES",
            "affiliate": "YCF TRAINING CENTER",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 12,
            "competitor": "Trident Athletics",
            "affiliate": "TRIDENT ATHLETICS",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 13,
            "competitor": "Two Toned Thunder",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Co-Ed - RX"
          },
          {
            "lane": 14,
            "competitor": "Young Guns & Wise Buns",
            "affiliate": "RED STICK CROSSFIT",
            "division": "Co-Ed - RX"
          }
        ]
      },
      {
        "heatNumber": 3,
        "time": "05:02 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Aged to Perfection",
            "affiliate": "VALLEY STRENGTH WEIGHTLIFTING",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 2,
            "competitor": "HGR CBD Athletics ",
            "affiliate": "PROJECT FITNESS",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 3,
            "competitor": "Nooners ",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 4,
            "competitor": "Sigma and Gyat",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Co-Ed - RX"
          },
          {
            "lane": 5,
            "competitor": "Battle Born and Worn",
            "affiliate": "CROSSFIT EVERYDAY HEROES",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Beat Boxers",
            "affiliate": "EAGLE CAP CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Bubba Needs Help",
            "affiliate": "CHAOS STRENGTH & CONDITIONING",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Cam and Kenn ",
            "affiliate": "CROSSFIT SAINT HELENS",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Deadlifts & Chill",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "DNR",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Dos Chanchos ",
            "affiliate": "CANVAS CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Grass Fed Grass Finished ",
            "affiliate": "CROSSFIT DANBURY",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Hustle and Muscle ",
            "affiliate": "CROSSFIT RICHLAND",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Misery Loves Company",
            "affiliate": "CROSSFIT AMBROSE",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "No Rep? No whey!",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Row-mates for Life",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Co-Ed - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 4,
        "time": "05:15 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Swole in Spirit",
            "affiliate": "THE PACK 208",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "SWOLEMATES ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "The Frenchies ",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Thicc and Tired",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "unTAYmable ",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "What Would Froning Do?",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "WOD my name out yo mouth ",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Co-Ed - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Ambiguously Qualified CrossFit Duo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Check Engine",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Dad Bod Dynasty",
            "affiliate": "NATURAL SELECTION CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Fullerton's Old School ",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "GOOD",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Irish Wristwatch ",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "OBSOLETE",
            "affiliate": "SKOL CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Red",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Thruster? I hardly know her",
            "affiliate": "INDEPENDENT",
            "division": "Masters Men's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 5,
        "time": "05:28 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "10 Kids Later...",
            "affiliate": "THE PACK 208",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Apple Bottom Cleans",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Barbell Bros",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Built in Black",
            "affiliate": "INDEPENDENT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Captain Baby",
            "affiliate": "LEAF (LEADING EDGE ATHLETICS AND FITNESS)",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Gen X Flex",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Iron Valkyrie Sisters",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Not Fast Just Furious",
            "affiliate": "VERDANT CROSSFIT NORTH",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Slay All Day",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Masters Women's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Worst Pace Scenario",
            "affiliate": "28FITNESS",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Mexican Jumping BEANS",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Peaked in High School",
            "affiliate": "CLARITY FIT",
            "division": "Masters Men's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "Team Puma Sock",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Masters Men's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 6,
        "time": "05:41 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Barbell Babes",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 2,
            "competitor": "bustin",
            "affiliate": "REWIRED FITNESS CO.",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 3,
            "competitor": "Fireside Centurions",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 4,
            "competitor": "Northside Thugs N Harmony",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 5,
            "competitor": "Old & Broken",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 6,
            "competitor": "SPUD BROTHERS",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 7,
            "competitor": "Super Snatch Bros.",
            "affiliate": "IRONDEN",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 8,
            "competitor": "T & C",
            "affiliate": "WASATCH CROSSFIT",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 9,
            "competitor": "Team PROPATH",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 10,
            "competitor": "Timmy and the Brain ",
            "affiliate": "RCF TACOMA",
            "division": "Masters Men's - RX"
          },
          {
            "lane": 11,
            "competitor": "‘90 problems, ‘04 ain’t one",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 12,
            "competitor": "Biggie Smalls",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 13,
            "competitor": "Blind Date",
            "affiliate": "SLATE STRENGTH AND CONDITIONING ",
            "division": "Men's - RX"
          },
          {
            "lane": 14,
            "competitor": "Boonie Bros",
            "affiliate": "INDEPENDENT",
            "division": "Men's - RX"
          },
          {
            "lane": 15,
            "competitor": "CHAOS BOYS ",
            "affiliate": "CHAOS STRENGTH & CONDITIONING",
            "division": "Men's - RX"
          },
          {
            "lane": 16,
            "competitor": "FYB",
            "affiliate": "FOUR RIVERS CROSSFIT",
            "division": "Men's - RX"
          }
        ]
      },
      {
        "heatNumber": 7,
        "time": "05:54 PM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Golden Big Backs",
            "affiliate": "OSO CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 3,
            "competitor": "GYMREAPERS",
            "affiliate": "KULAK CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 4,
            "competitor": "Lift me baby one more time",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 5,
            "competitor": "Quick & Thick",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - RX"
          },
          {
            "lane": 6,
            "competitor": "R.A.D Boys",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 7,
            "competitor": "R.A.D Dads",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - RX"
          },
          {
            "lane": 8,
            "competitor": "RX-ish",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - RX"
          },
          {
            "lane": 9,
            "competitor": "STANDIN ON BIDNESS (AT THE BEACH)",
            "affiliate": "CROSSFIT FORT VANCOUVER",
            "division": "Men's - RX"
          },
          {
            "lane": 10,
            "competitor": "Stud Puffins",
            "affiliate": "CROSSFIT CASUAL",
            "division": "Men's - RX"
          },
          {
            "lane": 11,
            "competitor": "Team RX minus",
            "affiliate": "ROCK CANYON CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 12,
            "competitor": "The Power Snatch Kids ",
            "affiliate": "THE PACK 208",
            "division": "Men's - RX"
          },
          {
            "lane": 13,
            "competitor": "Titanic Swim Team",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - RX"
          },
          {
            "lane": 14,
            "competitor": "UXO",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Men's - RX"
          },
          {
            "lane": 15,
            "competitor": "White Lotus",
            "affiliate": "CROSSFIT HYPERION",
            "division": "Men's - RX"
          }
        ]
      },
      {
        "heatNumber": 8,
        "time": "06:07 PM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Burpees and Biscuits",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Burrito Bros",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Factory Doughnutties",
            "affiliate": "THE GAUNTLET CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Fourth and WOD",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Grab em by the dumbbells ",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "High Bar Low Bar ",
            "affiliate": "CROSSFIT FULLERTON",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Howen ",
            "affiliate": "EAGLECAP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Mileage & Mayhem",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Peter Parkers",
            "affiliate": "EAGLECAP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "Pupsiki",
            "affiliate": "GAINS GYM ",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Stratton Oakmont Crossfit",
            "affiliate": "CROSSFIT RAVAGE",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "Strong Independent Men",
            "affiliate": "CODE 541",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Sugar Daddies",
            "affiliate": "STREET PARKING DADS",
            "division": "Men's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 9,
        "time": "06:20 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Summit Seekers ",
            "affiliate": "INDEPENDENT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Team Nonchalant",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Team saiyan ",
            "affiliate": "KULAK CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "The Swolemates",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "The Team That Shall Not Be Named",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Train Town",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Twin turbo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Men's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Brown and Down",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Gym Bruvz",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Rookie"
          },
          {
            "lane": 10,
            "competitor": "Last Minute Lifters",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Rice & Beans",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Men's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Rowing Pains",
            "affiliate": "THE PACK 208",
            "division": "Men's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Sweaty and Regrety",
            "affiliate": "YAKIMA CROSSFIT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "The team, the team, go team",
            "affiliate": "INDEPENDENT",
            "division": "Men's - Rookie"
          },
          {
            "lane": 15,
            "competitor": "Two Guys-Big Thighs",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Men's - Rookie"
          },
          {
            "lane": 16,
            "competitor": "Young Bull & Old Goat",
            "affiliate": "CROSSFIT REFUGE",
            "division": "Men's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 10,
        "time": "06:33 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "2 Snatched 2 Quit",
            "affiliate": "CROSSFIT INNER CHAMBER",
            "division": "Women's - Rookie"
          },
          {
            "lane": 2,
            "competitor": "Bend and Snap",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 3,
            "competitor": "Chalk Dirty to me ",
            "affiliate": "THE PACK CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 4,
            "competitor": "Dog Mom Duo",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 5,
            "competitor": "Flex Appeal ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 6,
            "competitor": "Floss n' Fades",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 7,
            "competitor": "Grit & Grace",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 8,
            "competitor": "Kettlebelles",
            "affiliate": "CROSSFIT FIRESIDE",
            "division": "Women's - Rookie"
          },
          {
            "lane": 9,
            "competitor": "Look WOD You Made Me Do",
            "affiliate": "LEAF (LEADING EDGE ATHLETICS AND FITNESS)",
            "division": "Women's - Rookie"
          },
          {
            "lane": 10,
            "competitor": "Masters in Motion",
            "affiliate": "CROSSFIT LEAF",
            "division": "Women's - Rookie"
          },
          {
            "lane": 11,
            "competitor": "Mother Hustlers",
            "affiliate": "THE PACK 208",
            "division": "Women's - Rookie"
          },
          {
            "lane": 12,
            "competitor": "Muscle Milkmaids",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Rookie"
          },
          {
            "lane": 13,
            "competitor": "Oh Snatch!",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - Rookie"
          },
          {
            "lane": 14,
            "competitor": "The Cougar and the Kitten",
            "affiliate": "LAST REP CROSSFIT",
            "division": "Women's - Rookie"
          },
          {
            "lane": 15,
            "competitor": "We Were On A Break",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Women's - Rookie"
          }
        ]
      },
      {
        "heatNumber": 11,
        "time": "06:46 PM",
        "lanes": [
          {
            "lane": 1,
            "competitor": "Critter Gitters",
            "affiliate": "INDEPENDENT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 2,
            "competitor": "Double Wonders",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 3,
            "competitor": "Down Bad Crying at the Gym",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 4,
            "competitor": "Flexual Healing",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 5,
            "competitor": "Gabz and Make it Rainz",
            "affiliate": "CROSSFIT FORGE 208",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 6,
            "competitor": "Grins and Wins",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 7,
            "competitor": "Hot Mom Era ",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 8,
            "competitor": "Hustle & Muscle ",
            "affiliate": "FOUR RIVERS CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 9,
            "competitor": "Long Distance Lifters",
            "affiliate": "3-46 GRIT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 10,
            "competitor": "Misplaced Masters",
            "affiliate": "VERDANT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 11,
            "competitor": "PR or ER",
            "affiliate": "CAMELBACK CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 12,
            "competitor": "Social Hour",
            "affiliate": "BOISE CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 13,
            "competitor": "The Power Puff Girls",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 14,
            "competitor": "Thunder & Lightning",
            "affiliate": "ASPECT CROSSFIT",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 15,
            "competitor": "Verdant Vixens",
            "affiliate": "CROSSFIT VERDANT NORTH",
            "division": "Women's - Intermediate"
          },
          {
            "lane": 16,
            "competitor": "Woddesses ",
            "affiliate": "CROSSFIT UNRESTRAINED",
            "division": "Women's - Intermediate"
          }
        ]
      },
      {
        "heatNumber": 12,
        "time": "06:59 PM",
        "lanes": [
          {
            "lane": 2,
            "competitor": "Arbor McFit",
            "affiliate": "ARBOR CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 3,
            "competitor": "Hannah Montana",
            "affiliate": "CROSSFIT FORT VANCOUVER",
            "division": "Women's - RX"
          },
          {
            "lane": 4,
            "competitor": "Hot Mess Express",
            "affiliate": "CROSSFIT CANVAS",
            "division": "Women's - RX"
          },
          {
            "lane": 5,
            "competitor": "Jacked in the Box ",
            "affiliate": "NEBO CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 6,
            "competitor": "M&M",
            "affiliate": "WASATCH CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 7,
            "competitor": "M&M Mayhem",
            "affiliate": "CROSSFIT TWIN FALLS",
            "division": "Women's - RX"
          },
          {
            "lane": 8,
            "competitor": "Naddy the baddies ",
            "affiliate": "KULAK CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 9,
            "competitor": "Northside Naptime Ninjas",
            "affiliate": "CROSSFIT NORTHSIDE",
            "division": "Women's - RX"
          },
          {
            "lane": 10,
            "competitor": "Not Dying, Just Gestating",
            "affiliate": "INDEPENDENT",
            "division": "Women's - RX"
          },
          {
            "lane": 11,
            "competitor": "O’Doyle Rules",
            "affiliate": "SNAKE RIVER CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 12,
            "competitor": "Power Princesses ",
            "affiliate": "NORTHRIM CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 13,
            "competitor": "Quad Squad",
            "affiliate": "SALTY HIVE CROSSFIT",
            "division": "Women's - RX"
          },
          {
            "lane": 14,
            "competitor": "Snatching with Sirens",
            "affiliate": "CROSSFIT RAVAGE",
            "division": "Women's - RX"
          },
          {
            "lane": 15,
            "competitor": "SuperMom Squad ",
            "affiliate": "TRIDENT ATHLETICS",
            "division": "Women's - RX"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "day": "Saturday",
    "workoutNumber": 4,
    "workoutName": "\"Bronco\" (GymReapers)",
    "timeRange": "08:30 AM - 11:03 AM",
    "location": "Main Stage",
    "heats": [
      {
        "heatNumber": 1,
        "time": "08:30 AM",
        "lanes": null
      },
      {
        "heatNumber": 2,
        "time": "08:43 AM",
        "lanes": null
      },
      {
        "heatNumber": 3,
        "time": "08:56 AM",
        "lanes": null
      },
      {
        "heatNumber": 4,
        "time": "09:09 AM",
        "lanes": null
      },
      {
        "heatNumber": 5,
        "time": "09:22 AM",
        "lanes": null
      },
      {
        "heatNumber": 6,
        "time": "09:35 AM",
        "lanes": null
      },
      {
        "heatNumber": 7,
        "time": "09:48 AM",
        "lanes": null
      },
      {
        "heatNumber": 8,
        "time": "10:01 AM",
        "lanes": null
      },
      {
        "heatNumber": 9,
        "time": "10:14 AM",
        "lanes": null
      },
      {
        "heatNumber": 10,
        "time": "10:27 AM",
        "lanes": null
      },
      {
        "heatNumber": 11,
        "time": "10:40 AM",
        "lanes": null
      },
      {
        "heatNumber": 12,
        "time": "10:53 AM",
        "lanes": null
      }
    ]
  },
  {
    "id": 5,
    "day": "Saturday",
    "workoutNumber": 5,
    "workoutName": "\"Vandal\" (Reign)",
    "timeRange": "11:36 AM - 03:33 PM",
    "location": "Main Stage",
    "heats": [
      {
        "heatNumber": 1,
        "time": "11:36 AM",
        "lanes": null
      },
      {
        "heatNumber": 2,
        "time": "11:56 AM",
        "lanes": null
      },
      {
        "heatNumber": 3,
        "time": "12:16 PM",
        "lanes": null
      },
      {
        "heatNumber": 4,
        "time": "12:36 PM",
        "lanes": null
      },
      {
        "heatNumber": 5,
        "time": "12:56 PM",
        "lanes": null
      },
      {
        "heatNumber": 6,
        "time": "01:16 PM",
        "lanes": null
      },
      {
        "heatNumber": 7,
        "time": "01:36 PM",
        "lanes": null
      },
      {
        "heatNumber": 8,
        "time": "01:56 PM",
        "lanes": null
      },
      {
        "heatNumber": 9,
        "time": "02:16 PM",
        "lanes": null
      },
      {
        "heatNumber": 10,
        "time": "02:36 PM",
        "lanes": null
      },
      {
        "heatNumber": 11,
        "time": "02:56 PM",
        "lanes": null
      },
      {
        "heatNumber": 12,
        "time": "03:16 PM",
        "lanes": null
      }
    ]
  },
  {
    "id": 6,
    "day": "Saturday",
    "workoutNumber": 6,
    "workoutName": "\"Mountain West Tommy V\" (Restore & Nutrishop)",
    "timeRange": "04:06 PM - 07:03 PM",
    "location": "Main Stage",
    "heats": [
      {
        "heatNumber": 1,
        "time": "04:06 PM",
        "lanes": null
      },
      {
        "heatNumber": 2,
        "time": "04:21 PM",
        "lanes": null
      },
      {
        "heatNumber": 3,
        "time": "04:36 PM",
        "lanes": null
      },
      {
        "heatNumber": 4,
        "time": "04:51 PM",
        "lanes": null
      },
      {
        "heatNumber": 5,
        "time": "05:06 PM",
        "lanes": null
      },
      {
        "heatNumber": 6,
        "time": "05:21 PM",
        "lanes": null
      },
      {
        "heatNumber": 7,
        "time": "05:36 PM",
        "lanes": null
      },
      {
        "heatNumber": 8,
        "time": "05:51 PM",
        "lanes": null
      },
      {
        "heatNumber": 9,
        "time": "06:06 PM",
        "lanes": null
      },
      {
        "heatNumber": 10,
        "time": "06:21 PM",
        "lanes": null
      },
      {
        "heatNumber": 11,
        "time": "06:36 PM",
        "lanes": null
      },
      {
        "heatNumber": 12,
        "time": "06:51 PM",
        "lanes": null
      }
    ]
  }
];

