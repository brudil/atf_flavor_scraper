import { VendorFetcher, Vendor } from "../types";

function FlavorWestGeneric(url: string): VendorFetcher {
    return (x) => new Promise((resolve, _reject) => {
        x(url, '.item', [{
            name: '.product-item-link | strip',
            url: '.product-item-link@href',
            data: x('.product-item-link@href', {
                density: 'div.additional-attributes-wrapper:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2)'
            })
            }])((_err,data: any[]) => resolve(data
                .map((page: any) => ({
                    name: page.name,
                    url: page.url,
                    density: page.data.density,
                    vendor: Vendor.FlavorWest
                }))));
    });
}

export const flavorWestFetchers = [
    FlavorWestGeneric('https://www.flavorwest.com/water-soluble-flavoring.html?product_list_limit=all'),
    FlavorWestGeneric('https://www.flavorwest.com/natural-flavoring.html?product_list_limit=all')
];