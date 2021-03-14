import{Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique} from 'typeorm'
import User from '../user/entities/user.entity'
@Entity()
@Unique(['name'])
export default class Permission {
  
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private descripition: string;

  @Column()
  private canViewFinancial: boolean;

  @Column()
  private canEditFinancial: boolean;

  @Column()
  private canViewReport: boolean;

  @Column()
  private canEditReport: boolean;

  @Column()
  private canViewGuest: boolean;

  @Column()
  private canEditGuest: boolean;

  @OneToMany(() => User, user => user.permission)
  public users: User[]

  constructor(
    name,
    description,
    canViewFinancial,
    canEditFinancial,
    canViewReport,
    canEditReport,
    canViewGuest,
    canEditGuest,
  ) {
    this.setName(name);
    this.setDescription(description);
    this.setCanViewFinancial(canViewFinancial);
    this.setCanEditFinancial(canEditFinancial);
    this.setCanViewReport(canViewReport);
    this.setCanEditReport(canEditReport);
    this.setCanViewGuest(canViewGuest);
    this.setCanEditGuest(canEditGuest);
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
    return this.descripition;
  }

  private setDescription(descripition: string): void {
    this.descripition = descripition;
  }

  private getCanViewFinancial(): boolean {
    return this.canViewFinancial;
  }

  private setCanViewFinancial(canViewFinancial: boolean): void {
    this.canViewFinancial = canViewFinancial;
  }

  private getCanEditFinancial(): boolean {
    return this.canEditFinancial;
  }

  private setCanEditFinancial(canEditFinancial: boolean): void {
    this.canEditFinancial = canEditFinancial;
  }

  private getCanViewReport(): boolean {
    return this.canViewReport;
  }

  private setCanViewReport(canViewReport: boolean): void {
    this.canViewReport = canViewReport;
  }

  private getCanEditReport(): boolean {
    return this.canEditReport;
  }

  private setCanEditReport(canEditReport): void {
    this.canEditReport = canEditReport;
  }

  private getCanViewGuest(): boolean {
    return this.canViewReport;
  }

  private setCanViewGuest(canViewGuest): void {
    this.canViewGuest = canViewGuest;
  }

  private getCanEditGuest(): boolean {
    return this.canEditGuest;
  }

  private setCanEditGuest(canEditGuest: boolean): void {
    this.canEditGuest = canEditGuest;
  }
}
