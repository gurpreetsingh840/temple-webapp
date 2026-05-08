import { Injectable } from '@angular/core';

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  getFullAddress(): string;
  getMapsUrl(): string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService implements ContactInfo {
  address = {
    street: '6611 Elkhart Road',
    city: 'N. Chesterfield',
    state: 'VA',
    zip: '23235'
  };

  phone = '804-514-2506';
  email = 'ssricva@gmail.com';

  getFullAddress(): string {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
  }

  getMapsUrl(): string {
    const encodedAddress = encodeURIComponent(this.getFullAddress());
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}&travelmode=driving`;
  }
} 