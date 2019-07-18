import { VendorFetcher, Vendor } from "../types";

const Capella: VendorFetcher = (x) => new Promise((resolve, _reject) => {
        x('https://www.capellaflavors.com/flavors?product_list_limit=all', '.item', [{
            name: '.product-item-link | strip',
            url: '.product-item-link@href'
            }])((_err,data: any[]) => resolve(data
                .map((page: any) => ({
                    name: page.name,
                    url: page.url,
                    density: null,
                    vendor: Vendor.Capella,
                }))));
    });
export const capellaFetchers = [
    Capella,
];