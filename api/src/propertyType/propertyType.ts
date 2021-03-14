import Property from '../property/entities/property.entity'
import {PrimaryGeneratedColumn, Column, OneToMany, Entity, Unique} from 'typeorm'

@Entity()
@Unique(['name'])
export default class PropertyType {

  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private description: string;

  @OneToMany(() => Property, property => property.propertyType)
  public properties: Property[];

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
