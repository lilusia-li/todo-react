export interface CreateTaskDto {
  title: string;
}

export interface UpdateTaskDto {
  id: string;
  title: string;
  isDone: boolean;
}