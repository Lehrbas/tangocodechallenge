export interface ITaskProps {
  title: string;
  description: string;
  status: string;
}

export interface TaskDTO {
  id: number;
  title: string;
  description: string;
  status: string;
}

export class Task {
  constructor(private props: ITaskProps) {}

  public getTitle() {
    return this.props.title;
  }

  public getDescription() {
    return this.props.description;
  }

  public getStatus() {
    return this.props.status;
  }
}
