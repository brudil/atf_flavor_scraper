import * as x from 'x-ray';

export enum Vendor {
    FlavorArt = 'FA',
    FlavorWest = 'FW',
    TheFlavorApprentice = 'TFA',
    Capella = 'CAP',
}

export interface Flavor {
    name: string;
    vendor: Vendor;
    density: string | null;
    url: string;
}

export type VendorFetcher = (xray: x.Instance) => Promise<Flavor[]>