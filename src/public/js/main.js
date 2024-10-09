
document.addEventListener('DOMContentLoaded', function() { renderHabits() }, false);

async function renderHabits() {

  const habitsObject = await getHabits();
  const habits = Object.values(habitsObject)[0];

  if(habits.length < 1) {
    console.log("No habits found");
    return;
  }

  generateHabitRows(habits.length);

  habits.forEach((habit, index) => {

    const habitElements = document.getElementsByClassName("habit-title");
  
    if (habitElements[index]) {
      habitElements[index].textContent = habit.title;
    }

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

function generateHabitRows(rows = 0) {
  
  let html = "";

  for (let i = 0; i < rows; i++) {
    html += `
      <tr class='habit-row'>
          <td class='habit-title'></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>`;  
  }

  const tableBody = document.getElementById('habit-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = html;
}
