const RATES = {
    usd: 36.85,
    eur: 40.11
};

function convert({uah, currency}) {
    if (!RATES[currency]) {
        return null
    }

    return uah * RATES[currency]
}