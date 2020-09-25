export interface Todo {

    /**
     * Id.
     */
    key: string;

    /**
     * Type of the node.
     */
    type: 'todo' | 'subtask' | 'summary'

    /**
     * Order.
     */
    order?:number;

    /**
     * True if completed; false otherwise.
     */
    complete: boolean;

    /**
     * Task name.
     */
    task: string;

    /**
     * Note
     */
    note?: string;
}