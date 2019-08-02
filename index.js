// Create a new task by adding to the arrays
// A new task will be created as incomplete
let newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
