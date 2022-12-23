export default interface ICreateTaskDTO {
  title: string;
  description: string;
  status: string;
  user?: {
    id?: string,
    name?: string,
  };
};
