export interface Task {
    /**
     * Task id.
     */
    id : string;

    /**
     * Type of the node.
     */
    type: 'Task' | 'SubTask' | 'Summary'

    /**
     * Order.
     */
    order?: string;

    /**
     * True if completed; false otherwise.
     */
    completed: boolean;

    /**
     * Parent task id.
     */
    parent: string;

    /**
     * Text of the task.
     */
    text?: string;
}