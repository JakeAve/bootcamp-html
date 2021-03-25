const monedas = [
    { "name": "Albanian Lek", "code": "ALL", "symbol": "Lek" },
    { "name": "Afghan Afghani", "code": "AFN", "symbol": "؋" },
    { "name": "Argentine Peso", "code": "ARS", "symbol": "$" },
    { "name": "Aruban Florin", "code": "AWG", "symbol": "ƒ" },
    { "name": "Australian Dollar", "code": "AUD", "symbol": "$" },
    { "name": "Azerbaijani Manat", "code": "AZN", "symbol": "₼" },
    { "name": "Bahamian Dollar", "code": "BSD", "symbol": "$" },
    { "name": "Barbados Dollar", "code": "BBD", "symbol": "$" },
    { "name": "Belarusian Ruble", "code": "BYN", "symbol": "Br" },
    { "name": "Belize Dollar", "code": "BZD", "symbol": "BZ$" },
    { "name": "Bermudian Dollar", "code": "BMD", "symbol": "$" },
    { "name": "Boliviano", "code": "BOB", "symbol": "$b" },
    {
        "name": "Bosnia And Herzegovina Convertible Mark",
        "code": "BAM",
        "symbol": "KM"
    },
    { "name": "Botswana Pula", "code": "BWP", "symbol": "P" },
    { "name": "Bulgarian Lev", "code": "BGN", "symbol": "лв" },
    { "name": "Brazilian Real", "code": "BRL", "symbol": "R$" },
    { "name": "Brunei Dollar", "code": "BND", "symbol": "$" },
    { "name": "Cambodian Riel", "code": "KHR", "symbol": "៛" },
    { "name": "Canadian Dollar", "code": "CAD", "symbol": "$" },
    { "name": "Cayman Islands Dollar", "code": "KYD", "symbol": "$" },
    { "name": "Chilean Peso", "code": "CLP", "symbol": "$" },
    {
        "name": "Renminbi (Chinese) Yuan",
        "code": "CNY",
        "symbol": "¥"
    },
    { "name": "Colombian Peso", "code": "COP", "symbol": "$" },
    { "name": "Costa Rican Colon", "code": "CRC", "symbol": "₡" },
    { "name": "Croatian Kuna", "code": "HRK", "symbol": "kn" },
    { "name": "Cuban Peso", "code": "CUP", "symbol": "₱" },
    { "name": "Czech Koruna", "code": "CZK", "symbol": "Kč" },
    { "name": "Danish Krone", "code": "DKK", "symbol": "kr" },
    { "name": "Dominican Peso", "code": "DOP", "symbol": "RD$" },
    { "name": "East Caribbean Dollar", "code": "XCD", "symbol": "$" },
    { "name": "Egyptian Pound", "code": "EGP", "symbol": "£" },
    { "name": "Salvadoran Colón", "code": "SVC", "symbol": "$" },
    { "name": "Euro", "code": "EUR", "symbol": "€" },
    {
        "name": "Falkland Islands Pound",
        "code": "FKP",
        "symbol": "£"
    },
    { "name": "Fiji Dollar", "code": "FJD", "symbol": "$" },
    { "name": "Ghanaian Cedi", "code": "GHS", "symbol": "¢" },
    { "name": "Gibraltar Pound", "code": "GIP", "symbol": "£" },
    { "name": "Guatemalan Quetzal", "code": "GTQ", "symbol": "Q" },
    { "name": "Guernsey Pound", "code": "GGP", "symbol": "£" },
    { "name": "Guyanese Dollar", "code": "GYD", "symbol": "$" },
    { "name": "Honduran Lempira", "code": "HNL", "symbol": "L" },
    { "name": "Hong Kong Dollar", "code": "HKD", "symbol": "$" },
    { "name": "Hungarian Forint", "code": "HUF", "symbol": "Ft" },
    { "name": "Icelandic Króna", "code": "ISK", "symbol": "kr" },
    { "name": "Indian Rupee", "code": "INR", "symbol": "₹" },
    { "name": "Indonesian Rupiah", "code": "IDR", "symbol": "Rp" },
    { "name": "Iranian Rial", "code": "IRR", "symbol": "﷼" },
    { "name": "Isle Of Man Pound", "code": "IMP", "symbol": "£" },
    { "name": "Israeli New Shekel", "code": "ILS", "symbol": "₪" },
    { "name": "Jamaican Dollar", "code": "JMD", "symbol": "J$" },
    { "name": "Japanese Yen", "code": "JPY", "symbol": "¥" },
    { "name": "Jersey Pound", "code": "JEP", "symbol": "£" },
    { "name": "Kazakhstani Tenge", "code": "KZT", "symbol": "лв" },
    { "name": "North Korean Won", "code": "KPW", "symbol": "₩" },
    { "name": "South Korean Won", "code": "KRW", "symbol": "₩" },
    { "name": "Kyrgyzstani Som", "code": "KGS", "symbol": "лв" },
    { "name": "Lao Kip", "code": "LAK", "symbol": "₭" },
    { "name": "Lebanese Pound", "code": "LBP", "symbol": "£" },
    { "name": "Liberian Dollar", "code": "LRD", "symbol": "$" },
    { "name": "Macedonian Denar", "code": "MKD", "symbol": "ден" },
    { "name": "Malaysian Ringgit", "code": "MYR", "symbol": "RM" },
    { "name": "Mauritian Rupee", "code": "MUR", "symbol": "₨" },
    { "name": "Mexican Peso", "code": "MXN", "symbol": "$" },
    { "name": "Mongolian Tögrög", "code": "MNT", "symbol": "₮" },
    { "name": "Mozambican Metical", "code": "MZN", "symbol": "MT" },
    { "name": "Namibian Dollar", "code": "NAD", "symbol": "$" },
    { "name": "Nepalese Rupee", "code": "NPR", "symbol": "₨" },
    {
        "name": "Netherlands Antillean Guilder",
        "code": "ANG",
        "symbol": "ƒ"
    },
    { "name": "New Zealand Dollar", "code": "NZD", "symbol": "$" },
    { "name": "Nicaraguan Córdoba", "code": "NIO", "symbol": "C$" },
    { "name": "Nigerian Naira", "code": "NGN", "symbol": "₦" },
    { "name": "Norwegian Krone", "code": "NOK", "symbol": "kr" },
    { "name": "Omani Rial", "code": "OMR", "symbol": "﷼" },
    { "name": "Pakistani Rupee", "code": "PKR", "symbol": "₨" },
    { "name": "Panamanian Balboa", "code": "PAB", "symbol": "B/." },
    { "name": "Paraguayan Guaraní", "code": "PYG", "symbol": "Gs" },
    { "name": "Peruvian Sol", "code": "PEN", "symbol": "S/." },
    { "name": "Philippine Peso", "code": "PHP", "symbol": "₱" },
    { "name": "Polish Złoty", "code": "PLN", "symbol": "zł" },
    { "name": "Qatari Riyal", "code": "QAR", "symbol": "﷼" },
    { "name": "Romanian Leu", "code": "RON", "symbol": "lei" },
    { "name": "Russian Ruble", "code": "RUB", "symbol": "₽" },
    { "name": "Saint Helena Pound", "code": "SHP", "symbol": "£" },
    { "name": "Saudi Riyal", "code": "SAR", "symbol": "﷼" },
    { "name": "Serbian Dinar", "code": "RSD", "symbol": "Дин." },
    { "name": "Seychelles Rupee", "code": "SCR", "symbol": "₨" },
    { "name": "Singapore Dollar", "code": "SGD", "symbol": "$" },
    {
        "name": "Solomon Islands Dollar",
        "code": "SBD",
        "symbol": "$"
    },
    { "name": "Somali Shilling", "code": "SOS", "symbol": "S" },
    { "name": "South African Rand", "code": "ZAR", "symbol": "R" },
    { "name": "Sri Lankan Rupee", "code": "LKR", "symbol": "₨" },
    { "name": "Swedish Krona", "code": "SEK", "symbol": "kr" },
    { "name": "Swiss Franc", "code": "CHF", "symbol": "CHF" },
    { "name": "Surinamese Dollar", "code": "SRD", "symbol": "$" },
    { "name": "Syrian Pound", "code": "SYP", "symbol": "£" },
    { "name": "New Taiwan Dollar", "code": "TWD", "symbol": "NT$" },
    { "name": "Thai Baht", "code": "THB", "symbol": "฿" },
    {
        "name": "Trinidad And Tobago Dollar",
        "code": "TTD",
        "symbol": "TT$"
    },
    { "name": "Turkish Lira", "code": "TRY", "symbol": "₺" },
    { "name": "Tuvalu Dollar", "code": "TVD", "symbol": "$" },
    { "name": "Ukrainian Hryvnia", "code": "UAH", "symbol": "₴" },
    { "name": "Pound Sterling", "code": "GBP", "symbol": "£" },
    { "name": "United States Dollar", "code": "USD", "symbol": "$" },
    { "name": "Uruguayan Peso", "code": "UYU", "symbol": "$U" },
    { "name": "Uzbekistan Som", "code": "UZS", "symbol": "лв" },
    {
        "name": "Venezuelan Bolívar Fuerte",
        "code": "VEF",
        "symbol": "Bs"
    },
    { "name": "Vietnamese đồng", "code": "VND", "symbol": "₫" },
    { "name": "Yemeni Rial", "code": "YER", "symbol": "﷼" },
    { "name": "Zimbabwean Dollar", "code": "ZWD", "symbol": "Z$" }
]

const conocidos = ['USD', 'CLP', 'EUR'];

function losParaCliente(arr1, arr2) {
    //     const result = [];

    //     for (let i = 0; i <  arr2.length; i ++) {
    //         const codeConocido = arr2[i];
    //         for (let j = 0; j < arr1.length; j ++) {
    //             const code = arr1[j].code;
    //             if (code === codeConocido) {
    //                 result.push(arr1[j])
    //             }
    //         }
    //     }
    //     return result;
    return arr1.filter(({ code }) =>
        arr2.find((val) => val === code)
    )
}

const paraCliente = losParaCliente(monedas, conocidos);

console.log(paraCliente)