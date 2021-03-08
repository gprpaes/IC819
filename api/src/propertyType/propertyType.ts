export default class PropertyType {
  private id: number;
  private name: string;
  private description: string;

  constructor(name, description) {
    this.setName(name);
    this.setDescription(description);
  }

  private getId(): number {
    return this.id;
  }

  private setId(id: number): void {
    this.id = id;
  }

  private getName(): string {
    return this.name;
  }

  private setName(name: string): void {
    this.name = name;
  }

  private getDescription(): string {
    return this.description;
  }

  private setDescription(description: string): void {
    this.description = description;
  }
}
