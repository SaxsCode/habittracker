
document.addEventListener('DOMContentLoaded', function() { work() }, false);

async function work() {

  const habitsObject = await getHabits();
  const habits = Array.isArray(habitsObject) ? habitsObject : Object.values(habitsObject)[0];

  if(habits.length < 1) {
    console.log("No habits found");
    return;
  }

  habits.forEach((habit, index) => {
    console.log(`Habit ${index + 1}:`, habit.title);
  });
   
};

async function getHabits() {
  try {
    const response = await fetch('./habits.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching habits:', error);
    throw error;
  }
}
