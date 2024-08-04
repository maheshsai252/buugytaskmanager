The Task Manager component is designed to be a simple application for managing a list of tasks. Here's how it should work when implemented correctly:

Task List Display:

The main component should display a list of tasks.
Each task should have a text description and a completion status (completed or not completed).
Tasks should be rendered as list items (<li> elements).


Adding New Tasks:

There should be an input field where the user can type the description of a new task.
A button labeled "Add Task" should be present.
When the user clicks this button, the new task should be added to the list of tasks.


Toggling Task Completion:

Users should be able to click on a task to toggle its completion status.
Completed tasks should have a line-through style to visually indicate their status.


Filtering Tasks:

There should be three filter buttons: "All", "Active", and "Completed".
"All" should show all tasks.
"Active" should show only uncompleted tasks.
"Completed" should show only completed tasks.
The list of tasks should update immediately when a filter is selected.


Task Statistics:

At the bottom, there should be a component showing statistics about the tasks.
It should display the total number of tasks.
It should also show the number of completed tasks.
These statistics should update automatically as tasks are added, completed, or un-completed.


React Hooks:

The component uses React Hooks (useState and useEffect) for state management and side effects.
State updates should trigger appropriate re-renders.
Effects should run when necessary to keep the UI in sync with the state.


Performance:

The component should be optimized to avoid unnecessary re-renders.
Computations and effects should only run when relevant data changes.



When working correctly, this Task Manager should allow users to easily add tasks, mark them as complete or incomplete, filter the task list, and see up-to-date statistics about their tasks. T
