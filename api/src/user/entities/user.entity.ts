import Person from '../../person/person';
import Permission from '../../permissions/permissions';
import { v4 as uuid } from 'uuid';
export class User extends Person {
  private id: string;
  private username: string;
  private propertyCNPJ: string;
  private position: string;
  private isSuperUser: boolean;
  private parentUser: User;
  private permissions: Permission;
  private blocked: boolean;
  private created: number;
  private deletedAt: number;
  private deleted: boolean;

  constructor(
    name,
    cpf,
    address,
    email,
    phone,
    birthday,
    username,
    propertyCNPJ,
    position,
    isSuperUser,
    parentUser,
    permissions,
    blocked,
  ) {
    super();
    this.setUsername(username);
    this.setPropertyCNPJ(propertyCNPJ);
    this.setPosition(position);
    this.setIsSuperUser(isSuperUser);
    this.setParentUser(parentUser);
    this.setPermissions(permissions);
    this.setBlocked(blocked);
    this.setName(name);
    this.setCpf(cpf);
    this.setAddress(address);
    this.setEmail(email);
    this.setPhone(phone);
    this.setBirthday(birthday);
    this.setCreated()
  }

  private getId(): string {
    return this.id;
  }
  private setId(id: string): void {
    this.id = id;
  }
  private getUsername(): string {
    return this.username;
  }

  private setUsername(username: string): void {
    this.username = username;
  }

  private getPropertyCNPJ(): string {
    return this.propertyCNPJ;
  }

  private setPropertyCNPJ(propertyCNPJ: string): void {
    this.propertyCNPJ = propertyCNPJ;
  }
  private getPosition(): string {
    return this.position;
  }

  private setPosition(postion: string): void {
    this.position = this.position;
  }

  private getIsSuperUser(): boolean {
    return this.isSuperUser;
  }
  private setIsSuperUser(isSuperUser: boolean): void {
    this.isSuperUser = isSuperUser;
  }

  private getParentUser(): User {
    return this.parentUser;
  }

  private setParentUser(parentUser: User): void {
    this.parentUser = parentUser;
  }

  private getPermissions(): Permission {
    return this.permissions;
  }

  private setPermissions(permissions: Permission): void {
    this.permissions = permissions;
  }

  private getCreated(): Number {
    //TODO: Maybe implemment some convertion to object date??
    return this.created;
  }

  private setCreated(): void {
    this.created = Date.now();
  }

  private getDeleted(): boolean {
    return this.deleted;
  }

  private setDeleted(deleted: boolean): void {
    this.deleted = deleted;
  }

  private getDeletedAt(): number {
    return this.deletedAt;
  }

  private setDeletedAt(): void {
    this.deletedAt = Date.now();
  }

  private getBlocked(): boolean {
    return this.blocked;
  }

  private setBlocked(blocked: boolean): void {
    this.blocked = blocked;
  }
}
