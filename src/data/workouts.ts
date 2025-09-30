import { Workout } from "@/types/workout";

export const workouts: Workout[] = [
  {
    id: "sawtooth",
    title: "WORKOUT ONE",
    subtitle: "SAWTOOTH",
    duration: "TOTAL REPS",
    workoutType: "AMRAP",
    format: "partner",
    videoUrl: "https://www.youtube.com/shorts/JmstX1ykdSk",
    flow: [
      "Teams start behind the start line.",
      "At \"go\", athletes will move forward, one to the Concept 2 rower and one to the barbell.",
      "Partner 1 will complete a round of 10 Deadlifts, 15 Bar Facing Burpees and 20 Wall Balls, advance bar then rotate with partner 2.",
      "Then, partner 2 will complete a round of 10 Deadlifts, 15 Bar Facing Burpees and 20 Wall Balls, advance bar, then rotate with partner 1.",
      "Partners will continue in this manner for 15 minutes.",
    ],
    flowNotes: [
      "During the row, rowers will NOT be reset and will be a continuous count of calories.",
      "Barbell must advance after each set of wall balls.",
      "Placecards will be used to indicate total calories completed.",
      "Athletes must face crowd on all movements.",
      "5ft shorty barbells (25lbs).",
      "Concept2 Rower.",
    ],
    scoring: "The sum of total reps and total calories completed over 15 minutes.",
    movementStandards: [
      {
        movement: "Row",
        description:
          "The rep begins with the athlete on the rower, hands not touching the handle, and the monitor set to zero. The rep ends and is credited when the monitor shows the prescribed calories with the athlete seated on the rower.",
        points: [
          "The athletes may not touch the monitor, if so the monitor will be reset back to its original state by the judge.",
          "At the finish of the 15 minute AMRAP, athletes must stop rowing, rollover calories will count.",
        ],
      },
      {
        movement: "Deadlifts",
        description:
          "The rep begins with the barbell on the ground. The rep is completed and credited when the athlete's hips and knees are fully extended, with the barbell in hand and shoulders behind the barbell.",
        points: [
          "The hands must be outside the knees (sumo deadlifts are NOT permitted).",
          "Deliberately bouncing the barbell is NOT permitted.",
        ],
      },
      {
        movement: "Wall Balls",
        description:
          "The rep begins with the med-ball in the front rack position (athletes may squat clean when taking the ball from the ground). The rep ends and is credited when the center of the ball makes contact with the target at or above the specified target height.",
        points: [
          "The ball must be taken from the bottom of a squat, hip crease passing clearly below the knee",
          "If the ball hits the ground it must come to a rest before initiating the next rep. Taking the ball from the rebound into the next rep is a no rep.",
        ],
      },
      {
        movement: "Bar Facing Burpees",
        description:
          "The rep begins with the athletes chest and thighs touching the ground while facing the bar, their body clearly within their lane. The rep ends and is credited when both feet have touched the ground on the opposite side of the blocks.",
        points: [
          "Stepping and/or jumping back to reach the bottom of the burpee is permitted",
          "Chest and thighs must clearly touch the ground",
          "Stepping and/or jumping back to the starting position is permitted.",
          "Athletes can get over bar anyway, a jump is not required.",
          "If a no-rep is received for any reason, the entire movement must be repeated again on any side of the bar.",
          "The feet must remain within the lane.",
        ],
      },
    ],
    rx: {
      deadlifts: {
        reps: 10,
        weight: "(225/155)",
      },
      burpees: {
        reps: 15,
        type: "BAR-FACING BURPEES",
      },
      wallBalls: {
        reps: 20,
        weight: "(20/14)",
        height: "(10FT/9FT)",
      },
    },
    intermediate: {
      deadlifts: {
        reps: 10,
        weight: "(185/125)",
      },
      burpees: {
        reps: 15,
        type: "BAR-FACING BURPEES",
      },
      wallBalls: {
        reps: 20,
        weight: "(20/14)",
        height: "(10FT/9FT)",
      },
    },
    rookie: {
      deadlifts: {
        reps: 10,
        weight: "(155/105)",
      },
      burpees: {
        reps: 15,
        type: "BAR-FACING BURPEES",
      },
      wallBalls: {
        reps: 20,
        weight: "(14/10)",
        height: "(10FT/9FT)",
      },
    },
    athlete2Instructions: "MAX CALORIE ROW",
    switchInstructions: "ATHLETES SWITCH AFTER EVERY COMPLETED ROUND.",
    sponsor: {
      name: "PROPATH FINANCIAL",
      logo: "/brands/pro-path-financial.svg",
    },
  },
  {
    id: "steelhead",
    title: "WORKOUT TWO",
    subtitle: "STEELHEAD",
    duration: "FOR TIME",
    workoutType: "",
    format: "partner",
    videoUrl: "https://www.youtube.com/shorts/J5-MejRIVls",
    flow: [
      "Teams start behind the start line.",
      "At \"go\", Partner 1 will move forward and complete a 30 ft handstand walk down, 20 Toes to Bar and another 30 ft handstand walk back and then release partner 2.",
      "When released, partner 2 will move forward and complete a 30 ft handstand walk down, 20 Toes to Bar and another 30 ft handstand walk back and then release partner 1.",
      "Then, partner 1 will complete 30 ft HSW down, 20 C2B, 30ft HSW back and then release partner 2.",
      "When released, partner 2 will complete 30 ft HSW down, 20 C2B, 30ft HSW back and then release partner 1.",
      "Then, partner 1 will complete a 30 ft HSW down, 10 BMU, 30ft HSW back and then release partner 2.",
      "Finally, partner 2 will complete a 30 ft HSW down, 10 BMU, 30ft HSW back and then sprint to the finish.",
      "Time will stop when partner 2 touches the finish pad.",
    ],
    flowNotes: [
      "Pull-up bars will be set at a fixed height of 94\".",
      "One 6\" riser will be available.",
    ],
    scoring: "The time to complete the workout. If time capped, the score will be the total reps completed within 12 minutes. Each 10ft section will count as 1 rep.",
    movementStandards: [
      {
        movement: "Handstand Walk (10ft unbroken)",
        description:
          "The rep begins with both the athlete's hands, including palm and fingers, behind the line. The rep ends and is credited when both hands, including palms and fingers, clearly cross the line.",
        points: [
          "Any style of handstand walk is permitted (forward, backward or sideways)",
          "Athletes must stay in their lane. If contact is made with the sideline, the athlete must restart from the last 10 ft section.",
          "If the athlete comes down at any time within the 10 foot section, the athlete must restart from the beginning of that section.",
        ],
      },
      {
        movement: "Toes to Bar",
        description:
          "The rep begins with the athlete hanging from the pull-up bar with arms extended and heels behind the pull-up bar. The rep is completed and credited when both feet clearly contact the bar between the hands at the same time.",
        points: [
          "Overhand, underhand, or mixed grips are all permitted.",
          "Any part of the feet may make contact with the bar.",
          "The heels must be brought back behind the pull-up bar.",
          "Wearing hand protection (gymnastics-style grips, gloves, etc.) is permitted.",
        ],
      },
      {
        movement: "C2B Pull-up",
        description:
          "The rep begins with the arms fully extended and feet off the ground. The rep ends and is credited when the chest clearly comes into contact with the bar at or below the collarbone.",
        points: [
          "Any style grip is permitted",
          "Wearing hand protection (gymnastics-style grips, gloves, etc.) is permitted.",
        ],
      },
      {
        movement: "Bar Muscle Up",
        description:
          "The rep begins with the arms fully extended and feet off the ground. The rep ends and is credited when the arms are fully locked out while the athlete is in the support position above the bar and the shoulders are over or in front of the bar.",
        points: [
          "Kipping the muscle-up is acceptable, but pullovers, rolls to support and glide kips are NOT permitted.",
          "No portion of the foot may rise above the height of the bar during the kip.",
          "Only the hands and no other part of the arm may touch the pull-up bar to assist the athlete in completing the rep.",
          "Removing the hands from the pull-up bar while at the top is NOT permitted. Resting at the top while their hands remain on the bar is ok. Adjusting their grip while at the top is ok.",
        ],
      },
      {
        movement: "Pull-up",
        description:
          "The rep begins with the arms fully extended and feet off the ground. The rep ends and is credited when the chin clearly breaks the plane of the bar.",
        points: [
          "Any style grip is permitted",
          "Wearing hand protection (gymnastics-style grips, gloves, etc.) is permitted.",
        ],
      },
      {
        movement: "Abmat Situps",
        description:
          "The rep begins with the athletes back in contact with the floor, knees bent and feet on ground in the butterfly position, shoulder blades touching ground and hands overhead making contact with floor. The rep ends and is credited when the athletes shoulders are in front of the hip in the upright position.",
        points: [
          "The athletes raise their torso in one fluid motion.",
        ],
      },
      {
        movement: "Hanging Knee Raise",
        description:
          "The rep begins with the athlete hanging from the pull-up bar with arms extended and heels behind the pull-up bar. The rep is completed and credited when the knees are above the hip crease.",
        points: [
          "Overhand, underhand, or mixed grips are all permitted.",
          "The heels must be brought back behind the pull-up bar.",
          "Wearing hand protection (gymnastics-style grips, gloves, etc.) is permitted.",
        ],
      },
      {
        movement: "Heels Above Hips",
        description:
          "The rep begins with the athlete hanging from the pull-up bar with arms extended and heels behind the pull-up bar. The rep is completed and credited when both heels are above the hip crease in the front.",
        points: [
          "Overhand, underhand, or mixed grips are all permitted.",
          "The heels must be brought back behind the pull-up bar.",
          "Wearing hand protection (gymnastics-style grips, gloves, etc.) is permitted.",
        ],
      },
      {
        movement: "DB Overhead Carry",
        description:
          "The rep begins with both dumbbells in the overhead position. The rep is completed and credited when the athlete has crossed the line with both feet while DB's are still overhead.",
        points: [
          "Lock out is not required, but both heads of the DB's must stay above the head.",
          "Hands must stay around the metal part of the DB only.",
          "The DB's cannot touch each other at the top",
          "Carries must be completed in 10 ft UB sections",
          "Dropping the dumbbells from overhead will result in a no rep and athletes will have to complete the 10ft sections UB again.",
          "Athletes must keep their hands around dumbbell until they reach the ground",
        ],
      },
    ],
    rx: {
      rounds: [
        {
          movements: [
            "30 FT. HANDSTAND WALK",
            "20 TOES TO BAR",
            "30 FT. HANDSTAND WALK",
          ],
        },
        {
          movements: [
            "30 FT. HANDSTAND WALK",
            "20 CHEST TO BAR PULL-UPS",
            "30 FT. HANDSTAND WALK",
          ],
        },
        {
          movements: [
            "30 FT. HANDSTAND WALK",
            "10 BAR MUSCLE-UPS",
            "30 FT. HANDSTAND WALK",
          ],
        },
      ],
      notes: ["2 ROUNDS:", "2 ROUNDS:", "2 ROUNDS:"],
    },
    intermediate: {
      rounds: [
        {
          movements: [
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
            "15 TOES TO BAR",
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
          ],
        },
        {
          movements: [
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
            "15 PULL-UPS",
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
          ],
        },
        {
          movements: [
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
            "15 CHEST TO BAR PULL-UPS",
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
          ],
        },
      ],
      dumbbellWeight: "(50S/35S)",
      notes: ["2 ROUNDS:", "2 ROUNDS:", "2 ROUNDS:"],
    },
    rookie: {
      rounds: [
        {
          movements: [
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
            "30 AB MAT SIT UPS",
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
          ],
        },
        {
          movements: [
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
            "20 HANGING KNEE RAISES",
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
          ],
        },
        {
          movements: [
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
            "20 HEELS ABOVE HIPS",
            "30 FT. DOUBLE DUMBBELL OVERHEAD CARRY",
          ],
        },
      ],
      dumbbellWeight: "(50S/35S)",
      notes: ["2 ROUNDS:", "2 ROUNDS:", "2 ROUNDS:"],
    },
    switchInstructions: "ATHLETES ALTERNATE ROUNDS",
    additionalNotes: [
      "(EACH ATHLETE DOES 1 ROUND OF EACH VARIANT)",
      "*10FT SECTIONS UNBROKEN.",
    ],
    sponsor: {
      name: "SCHEELS",
      logo: "/brands/scheels.svg",
    },
  },
  {
    id: "spud-nation",
    title: "WORKOUT THREE",
    subtitle: "SPUD NATION",
    duration: "FOR TIME",
    workoutType: "",
    format: "partner",
    videoUrl: "https://www.youtube.com/shorts/mqYiRzNLCGA",
    flow: [
      "Teams start behind the start line.",
      "At \"go\", Partner 1 will move to the barbell, partner 2 will move to the jump rope. Once partner 1 has the barbell in the front rack position, partner 2 can begin the jump ropes.",
      "Partners may share the jump rope work in any fashion and can rotate at any time.",
      "Athletes must advance the jump rope after the completion of every set of 40 jump ropes.",
      "Once the jump ropes are completed, one athlete will move to the bike to complete their prescribed number of calories while the other athlete performs a barbell front rack hold.",
      "Same gender partners may share calories in any fashion and can rotate at any time.",
      "Mixed Gender partners, any athlete may complete their prescribed calories first.",
      "Once the bike calories are completed, teams will sprint to the finish where time will stop when the last athlete touches the finish mat.",
    ],
    flowNotes: [
      "Jump ropes will be Rx Smart Gear Drag Ropes and will be provided by the event. Sizes available: S, M, L, XL",
      "Athletes may use their own Rx Smart Gear Drag Rope (after approval).",
      "Athletes must face crowd on all movements.",
      "5ft shorty barbells (25lbs)",
      "Bike must be reset for co-Ed pairs",
    ],
    scoring: "The time to complete the workout. If time capped, the score will be the total reps completed within 10 minutes.",
    movementStandards: [
      {
        movement: "Double Unders (Drag Rope)",
        description:
          "The rep begins with the jump rope in the athlete's hands. The rep ends and is credited when the rope has passed under the feet twice for each jump.",
        points: [
          "The rope must spin forward.",
          "Only successful jumps are counted, not attempts.",
          "Athletes must stay in their lanes, touching the sidelines will result in a no-rep.",
        ],
      },
      {
        movement: "Single Unders (Drag Rope)",
        description:
          "The rep begins with the jump rope in the athlete's hands. The rep ends and is credited when the rope has passed under the feet once for each jump.",
        points: [
          "The rope must spin forward.",
          "Only successful jumps are counted, not attempts.",
          "Athletes must stay in their lanes, touching the sidelines will result in a no-rep.",
        ],
      },
      {
        movement: "Bike",
        description:
          "The rep begins with the athlete on the bike and the monitor set to zero. The rep ends and is credited when the monitor shows the prescribed calories with the athlete seated on the bike.",
        points: [
          "The athletes may not touch the monitor.",
        ],
      },
      {
        movement: "Front Rack Hold",
        description:
          "The rep begins with the barbell in the front rack position with elbows clearly in front, standing tall with the hips and knees clearly extended.",
        points: [
          "The bar must remain in the front rack position, touching the athletes shoulders.",
          "If at any time the bar comes off of the front rack position, the reps for the double unders and/or bike will not count",
          "Athletes may hold bar anyway as long as bar is in the front rack (zombie, crossover grip, standard)",
        ],
      },
    ],
    rx: {
      movements: [
        "160 DRAG ROPE DOUBLE-UNDERS",
        "80/60 CALORIE ECHO BIKE",
        "*CO-ED: 40/30 CALORIES",
      ],
      barbellHold: {
        men: "115LBS",
        women: "75LBS",
        coed: "95LBS",
      },
    },
    intermediate: {
      movements: [
        "120 DRAG ROPE DOUBLE-UNDERS",
        "80/60 CALORIE ECHO BIKE",
        "*CO-ED: 40/30 CALORIES",
      ],
      barbellHold: {
        men: "115LBS",
        women: "75LBS",
        coed: "95LBS",
      },
    },
    rookie: {
      movements: [
        "160 DRAG ROPE SINGLE-UNDERS",
        "80/60 CALORIE ECHO BIKE",
        "*CO-ED: 40/30 CALORIES",
      ],
      barbellHold: {
        men: "115LBS",
        women: "75LBS",
        coed: "95LBS",
      },
    },
    switchInstructions:
      "ONE ATHLETE MUST HOLD A BARBELL IN THE RACK POSITION. THE WORKING ATHLETE MAY ONLY COMPLETE REPS WHILE THEIR TEAMMATE IS MAINTAINING THE BARBELL RACK POSITION HOLD.",
    additionalNotes: ["TIMECAP 10:00 MINUTES"],
    sponsor: {
      name: "RXSG",
      logo: "/brands/rxsg.svg",
    },
  },
  {
    id: "bronco",
    title: "WORKOUT FOUR",
    subtitle: "BRONCO",
    duration: "",
    workoutType: "FOR TOTAL CUMULATIVE LOAD",
    format: "partner",
    videoUrl: "https://www.youtube.com/shorts/H9_gdwHUIwA",
    flow: [
      "Athlete 1 starts at sandbag, athlete 2 starts at Barbell. Partners may load the barbell to their first attempt. For co-ed divisions, male athlete barbell cleans for sets 1, 2 and 3.",
      "At \"go\" pairs will have their first 90 second window for Partner 1 to complete 8 Sandbag over barrier, then partner 2 to complete a successful barbell clean within the remaining time.",
      "Partner 2 may load and unload the barbell at any point during this window. Athletes may take as many attempts within the remaining time. Athletes may go up and down in weight. The lift must be completed within 90 seconds.",
      "Then, pairs will have their second 90 second window for partner 1 to complete 8 Sandbag over barrier, then partner 2 to complete a successful barbell clean within the remaining time.",
      "Finally, pairs will have their 90 second window for partner 1 to complete 8 Sandbag over barrier, then partner 2 to complete a successful barbell clean within the remaining time.",
      "Then, there will be a 1 minute transition where partners will switch. Partner 1 to barbell cleans and partner 2 to sandbag over the bar.",
      "We will continue in the same way for sets 4, 5 and 6 with partner 2 completing sandbag over barrier and partner 1 completing a successful barbell clean within the remaining time.",
    ],
    flowNotes: [
      "Rogue Sandbags.",
      "Males | 45lb/20kg Ohio Bar",
      "Females | 35lb/15kg Bella Bar",
      "Rogue Bumper Plates - Weights available: x4 45lb, X2 35lb, x2 25lb, x2 15lb, x2 10lb, x2 5lb, x2 2.5lb",
      "Athletes must declare their weights to the judge.",
      "Athletes must remain within the designated lifting area, touching the tape is not NOT permitted.",
      "Athletes must face the crowd.",
      "The lifting area must be clear of all equipment and collars must be placed on the barbell for safety.",
      "Unused plates and equipment must be in the designated area, outside of the yellow tape.",
      "All lifts must be completed within the 90 second window.",
      "Gymnastics grips are NOT permitted for this workout.",
    ],
    scoring: "Cumulative load of 3 successful lifts of each partner. (3 Lifts partner #1, 3 Lifts partner #2)",
    movementStandards: [
      {
        movement: "Sandbag over Barrier",
        description:
          "The rep begins with the sandbag on the ground. The rep ends and is credited when the sandbag gets over the 4ft barrier to the other side.",
        points: [
          "Athletes can get the bag over the barrier anyway.",
          "Athletes must go under the barrier to start the next rep.",
        ],
      },
      {
        movement: "Clean",
        description:
          "The rep begins with the barbell on the ground. The rep ends and is credited when the athlete's hips and knees are fully extended, bar resting on shoulders, elbows in front of bar when viewed from profile and feet are in line with each other.",
        points: [
          "The athletes must reach the finish position before lowering the barbell from the shoulders.",
          "Only the athletes feet may touch the ground during the rep.",
          "The Rep must be fully completed before the :90second interval ends.",
          "Athletes may increase or decrease weights, athletes are able to take multiple attempts in each interval, but only 1 successful lift will be counted per interval.",
        ],
      },
    ],
    rx: {
      movements: [
        "EVERY 90 SECONDS X 6 SETS",
        "ATHLETE 1: 8 SANDBAG OVER BARRIER (150/100) (4FT)",
        "- THEN, IN REMAINING TIME -",
        "ATHLETE 2: 1 BARBELL CLEAN",
        "",
        "SETS 1,2,3",
        "ATHLETE 1 SANDBAG OVER BARRIER",
        "ATHLETE 2 BARBELL CLEAN",
        "",
        "- 1 MINUTE TRANSITION -",
        "",
        "SETS 4,5,6",
        "ATHLETE 2 SANDBAG OVER BARRIER",
        "ATHLETE 1 BARBELL CLEAN",
      ],
    },
    intermediate: {
      movements: [
        "EVERY 90 SECONDS X 6 SETS",
        "ATHLETE 1: 8 SANDBAG OVER BARRIER (125/75) (4FT)",
        "- THEN, IN REMAINING TIME -",
        "ATHLETE 2: 1 BARBELL CLEAN",
        "",
        "SETS 1,2,3",
        "ATHLETE 1 SANDBAG OVER BARRIER",
        "ATHLETE 2 BARBELL CLEAN",
        "",
        "- 1 MINUTE TRANSITION -",
        "",
        "SETS 4,5,6",
        "ATHLETE 2 SANDBAG OVER BARRIER",
        "ATHLETE 1 BARBELL CLEAN",
      ],
    },
    rookie: {
      movements: [
        "EVERY 90 SECONDS X 6 SETS",
        "ATHLETE 1: 8 SANDBAG OVER BARRIER (100/50) (4FT)",
        "- THEN, IN REMAINING TIME -",
        "ATHLETE 2: 1 BARBELL CLEAN",
        "",
        "SETS 1,2,3",
        "ATHLETE 1 SANDBAG OVER BARRIER",
        "ATHLETE 2 BARBELL CLEAN",
        "",
        "- 1 MINUTE TRANSITION -",
        "",
        "SETS 4,5,6",
        "ATHLETE 2 SANDBAG OVER BARRIER",
        "ATHLETE 1 BARBELL CLEAN",
      ],
    },
    sponsor: {
      name: "GYMREAPERS",
      logo: "/brands/gymreapers.svg",
    },
  },
  {
    id: "vandal",
    title: "WORKOUT FIVE",
    subtitle: "VANDAL",
    duration: "FOR TIME",
    workoutType: "",
    format: "partner",
    videoUrl: "https://www.youtube.com/shorts/Mf3aGKRITu4",
    flow: [
      "Teams will start behind the start line.",
      "At \"go\" athletes will run down their lane, traverse a 4ft barrier then complete a 500 meter run, within an enclosed course.",
      "Upon returning from their run, athletes will find their lane, traverse a 4ft barrier, and then move all the implements to the designated area, 30 feet away.",
      "Athletes do not need to wait for partners to traverse the barrier and/or begin the implement carry, athletes do need to wait for both athletes to complete the barrier traverse after the implement carry before beginning the next 500m run.",
      "Athletes may only carry 1 sandbag or 1-2 DBs at a time.",
      "Once all the implements have been moved to the designated area, athletes will go back down their lane, traverse the 4ft barrier and begin round 2 of this workout.",
      "Enter the run course for 500 meters, find their lane, traverse the 4 ft barrier and complete another 30 foot implement carry.",
      "Teams will continue in this way for a total of 4 rounds, or 4 Implement carries & 3 total runs for the Rookie divisions.",
      "Time will stop when the athletes have reached the finish mat after all implements on the 4th round have been moved to the designated area.",
    ],
    flowNotes: [
      "Athletes do not need to run together, but they may not leave before all equipment is moved.",
      "Athletes can start moving equipment before their partner is back.",
      "Athletes may carry only 1 SB or 1-2 DB's at at time.",
      "Athletes may not stack DB's or SB's",
      "Co-ed pairs can move each other's equipment.",
    ],
    scoring: "The time to complete 4 rounds. If time capped, the score will be the total reps completed within the cap. The run is 1 rep. Each implement is 1 rep. Tiebreak: Time at the completion of each round.",
    movementStandards: [
      {
        movement: "Run",
        description:
          "The rep begins with the athlete behind the designated start line. The rep ends and is credited when both feet of the athlete land on the ground on the other side of barrier.",
        points: [
          "The athlete must remain and follow the designated run path.",
          "Headphones are NOT permitted.",
          "Shoes must be worn.",
        ],
      },
      {
        movement: "Implement Carry",
        description:
          "The rep begins with the implement on the ground. The rep ends and is credited when the implement is moved to the other side of the 30 ft lane.",
        points: [
          "The athletes must carry the implements to the other side of the lane and stay in their lane.",
        ],
      },
    ],
    rx: {
      movements: [
        "4 ROUNDS FOR TIME:",
        "",
        "500M PARTNER RUN",
        "30FT. IMPLEMENT CARRY",
        "",
        "ATHLETES WILL JUMP OVER 4FT TALL BARRIER ON THE WAY",
        "DOWN & IN FROM THE 500M RUN EACH ROUND.",
        "",
        "ALL IMPLEMENTS MUST BE MOVED 30 FT. EVERY ROUND.",
        "",
        "BOTH PARTNERS CAN WORK SIMULTANEOUSLY AND DIVIDE THE",
        "WORK ANYWAY.",
        "",
        "4 SANDBAGS",
        "(MEN/CO-ED: 150, 125, 100, 75)",
        "(WOMEN: 125, 100, 75, 50)",
        "",
        "4 DBS PER TEAM",
        "(MEN/CO-ED: (2 X 70) & (2 X 50)",
        "(WOMEN: (2 X 50), (2 X 35)",
        "",
        "TIME CAP: 17:00",
      ],
    },
    intermediate: {
      movements: [
        "4 ROUNDS FOR TIME:",
        "",
        "500M PARTNER RUN",
        "30FT. IMPLEMENT CARRY",
        "",
        "ATHLETES WILL JUMP OVER 4FT TALL BARRIER ON THE WAY",
        "DOWN & IN FROM THE 500M RUN EACH ROUND.",
        "",
        "ALL IMPLEMENTS MUST BE MOVED 30 FT. EVERY ROUND.",
        "",
        "BOTH PARTNERS CAN WORK SIMULTANEOUSLY AND DIVIDE THE",
        "WORK ANYWAY.",
        "",
        "4 SANDBAGS",
        "(MEN/CO-ED: 150, 125, 100, 75)",
        "(WOMEN: 125, 100, 75, 50)",
        "",
        "4 DBS PER TEAM",
        "(MEN/CO-ED: (2 X 70) & (2 X 50)",
        "(WOMEN: (2 X 50), (2 X 35)",
        "",
        "TIME CAP: 17:00",
      ],
    },
    rookie: {
      movements: [
        "FOR TIME:",
        "",
        "30FT. IMPLEMENT CARRY",
        "500M RUN",
        "30FT. IMPLEMENT CARRY",
        "500M RUN",
        "30FT. IMPLEMENT CARRY",
        "500M RUN",
        "30FT. IMPLEMENT CARRY",
        "",
        "ATHLETES WILL JUMP OVER 4FT TALL BARRIER ON THE WAY",
        "DOWN & IN FROM THE 500M RUN EACH ROUND.",
        "",
        "ALL IMPLEMENTS MUST BE MOVED 30 FT. EVERY ROUND.",
        "",
        "BOTH PARTNERS CAN WORK SIMULTANEOUSLY AND DIVIDE THE",
        "WORK ANYWAY.",
        "",
        "4 SANDBAGS",
        "(MEN/CO-ED: 150, 125, 100, 75)",
        "(WOMEN: 125, 100, 75, 50)",
        "",
        "4 DBS PER TEAM",
        "(MEN/CO-ED: (2 X 70) & (2 X 50)",
        "(WOMEN: (2 X 50), (2 X 35)",
      ],
    },
    sponsor: {
      name: "REIGN",
      logo: "/brands/reign.svg",
    },
  },
  {
    id: "mw-tommy-v",
    title: "WORKOUT SIX",
    subtitle: "MW TOMMY V",
    duration: "FOR TIME",
    workoutType: "",
    format: "partner",
    videoUrl: "https://www.youtube.com/shorts/ENXiaJMi8Ds",
    flow: [
      "Teams will start behind the start line.",
      "At \"go\", athletes move to their barbells and complete 21 synchro thrusters. Both athletes must face the finish mat.",
      "Then, both athletes move to the rope and complete their designated number of rope climbs, sharing the work in any way. Non-working athletes must remain in the designated area, behind the rig.",
      "Then, back to the bars, advance forward and then complete 15 synchro thrusters.",
      "Move back to the rope and complete their designated number of rope climbs, sharing the work in any way.",
      "Then, back to the bars, advance forward and then complete 9 synchro thrusters.",
      "Move back to the rope and complete their designated number of rope climbs, sharing the work in any way.",
      "After the final rope climb, athletes will sprint to finish where time will stop when the last athlete touches the finish mat.",
    ],
    flowNotes: [
      "Shorty barbells.",
      "12ft is a metal beam.",
    ],
    scoring: "The score is the time to complete the workout. If time capped, the score is the total reps completed within 12 minutes.",
    movementStandards: [
      {
        movement: "Synchro Thruster",
        description:
          "Synchro is at the end of the repetition when both athletes' bars are locked out overhead, with the hips, knees, and arms clearly extended with the bar clearly directly over or slightly behind the middle of the body at the same time. The rep begins with the bar held in the front rack position by both athletes facing the crowd. The rep ends and is credited when both athletes' bars are locked out overhead, with the hips, knees, and arms clearly extended with the bar clearly directly over or slightly behind the middle of the body.",
        points: [
          "The athlete must move from the bottom of a front squat to full lockout overhead in one fluid movement.",
          "The crease of the athlete's hip must clearly pass below the top of the athlete's knees.",
          "A thruster jerk is NOT permitted. An athlete deliberately re-dipping their knees under the bar is not permitted. However, an athlete stabilizing by moving their feet is permitted.",
          "A full squat clean into the thruster is allowed when the bar is taken from the floor.",
          "Athletes must stay in their lanes, touching the sidelines will result in a no-rep.",
        ],
      },
      {
        movement: "Rope Climb (12ft)",
        description:
          "The rep begins with the athlete on the ground. The rep ends and is credited when the athlete has clearly touched the metal cross beam.",
        points: [
          "Jumping up to begin each ascent is permitted",
          "The use of the legs is permitted.",
          "Athletes may descend in any fashion.",
        ],
      },
      {
        movement: "Ring Rows (Rookie Division)",
        description:
          "The rep begins with the athlete's feet (including the heels) clearly on one side of the tape, hands on the rings with arms straight (elbows extended) and legs straight (knees and hips extended). The rep ends and is credited when the chest and or shoulders clearly come into contact with both the rings at the same time.",
        points: [
          "The feet (including the heels) need to stay in front of the tape line, opposite of the rings",
          "The legs need to straight (hips and knees extended)",
          "Wearing hand protection (gymnastics-style grips, gloves, etc.) is permitted",
          "Athletes must face the designated direction",
          "Tape line: 30 inches long, no wider than 2 inches and directly under the pull-up bar the rings are hanging from.",
          "Rings: 34 inches from the floor to the bottom of the lowest part of the rings.",
        ],
      },
    ],
    rx: {
      movements: [
        "FOR TIME:",
        "",
        "21-15-9",
        "SYNCHRO THRUSTERS",
        "12-9-6",
        "ROPE CLIMBS",
        "",
        "TIME CAP: 12:00",
        "",
        "SHORTY BARBELL: 115/75",
        "12FT ROPE CLIMB HEIGHT",
        "*CAN SPLIT ROPE CLIMBS",
      ],
    },
    intermediate: {
      movements: [
        "FOR TIME:",
        "",
        "21-15-9",
        "SYNCHRO THRUSTERS",
        "9-6-3",
        "ROPE CLIMBS",
        "",
        "TIME CAP: 12:00",
        "",
        "SHORTY BARBELL: 95/65",
        "12FT ROPE CLIMB HEIGHT",
        "*CAN SPLIT ROPE CLIMBS",
      ],
    },
    rookie: {
      movements: [
        "FOR TIME:",
        "",
        "21-15-9",
        "SYNCHRO THRUSTERS",
        "42-30-18",
        "RING ROWS",
        "",
        "TIME CAP: 12:00",
        "",
        "SHORTY BARBELL: 75/55",
        "*RING ROWS: SPLIT W/TEAMMATE",
      ],
    },
    sponsor: {
      name: "NUTRISHOP / RESTORE",
      logo: "/brands/nutrishop.svg",
      secondaryLogo: "/brands/restore-hyper-wellness.svg",
    },
  },
];
