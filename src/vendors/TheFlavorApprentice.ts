import { VendorFetcher, Vendor } from "../types";

function TFAGeneric(url: string): VendorFetcher {
    return (x) => new Promise((resolve, _reject) => {
        x(url, '.product-listing > li', [{
            name: 'a:first-child | strip',
            url: 'a:first-child@href'
            }])((_err,data: any[]) => resolve(data
                .map((page: any) => ({
                    name: page.name,
                    url: page.url,
                    density: null,
                    vendor: Vendor.TheFlavorApprentice
                }))));
    });
}

export const tfaFetchers = [
    // cereal
    TFAGeneric('https://shop.perfumersapprentice.com/c-231-cereal-flavors.aspx'),
    // choclate/vanilla
    TFAGeneric('https://shop.perfumersapprentice.com/c-154-chocolate-vanilla-flavors.aspx'),
    // coffee
    TFAGeneric('https://shop.perfumersapprentice.com/c-149-coffee-flavors.aspx'),
    // fruit/veg
    TFAGeneric('https://shop.perfumersapprentice.com/c-155-fruit-and-vegetable-flavors.aspx'),
    // mint/menthol
    TFAGeneric('https://shop.perfumersapprentice.com/c-151-menthol-and-mint.aspx'),
    // nutty
    TFAGeneric('https://shop.perfumersapprentice.com/c-157-nutty-flavors.aspx'),
    // savory
    TFAGeneric('https://shop.perfumersapprentice.com/c-156-savory-flavors.aspx'),
    // spices/floral
    TFAGeneric('https://shop.perfumersapprentice.com/c-152-spices-and-floral.aspx'),
    // sweet/sour
    TFAGeneric('https://shop.perfumersapprentice.com/c-150-sweet-or-sour-flavors.aspx'),
    // tea/soda/liqueur
    TFAGeneric('https://shop.perfumersapprentice.com/c-158-tea-soda-and-liqueur-flavors.aspx'),
    // tobacco/wood
    TFAGeneric('https://shop.perfumersapprentice.com/c-153-tobacco-and-wood-flavors.aspx'),
];