const quotesContainer = document.querySelector('.quotes');


const quotesCollection = [
    {theQuote: 'If you only knew the magnificence of the 3, 6 and 9, then you would have a key to the universe', theCiting: 'Nikola Tesla ', theReference: 'https://www.teslasociety.com/'},

    {theQuote: 'The greatest glory in living lies not in never falling, but in rising every time we fall', theCiting: 'Nelson Mandela', theReference: 'https://www.nelsonmandela.org/'},

    {theQuote: 'The way to get started is to quit talking and begin doing', theCiting: 'Walt Disney', theReference: 'https://en.wikipedia.org/wiki/Walt_Disney'},

    {theQuote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", theCiting: 'Oprah Winfrey', theReference: 'https://www.oprah.com/index.html'},

    {theQuote: "Life is what happens when you're busy making other plans. ", theCiting: 'John Lennon', theReference: 'https://www.johnlennon.com/'},

    {theQuote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', theCiting: 'Mother Teresa', theReference: 'https://en.wikipedia.org/wiki/Mother_Teresa'},

    {theQuote: 'Do not let making a living prevent you from making a life.', theCiting: 'John Wooden', theReference: 'https://coachwooden.com/'},

    {theQuote: 'Life is ours to be spent, not to be saved', theCiting: 'D. H. Lawrence', theReference: 'https://en.wikipedia.org/wiki/D._H._Lawrence'},

    {theQuote: 'Love the life you live. Live the life you love', theCiting: 'Bob Marley', theReference: 'https://www.bobmarley.com/'},

    {theQuote: 'Life is trying things to see if they work', theCiting: 'Ray Bradbury', theReference: 'https://raybradbury.com/'},

    {theQuote: 'If you really look closely, most overnight successes took a long time', theCiting: 'Steve Jobs', theReference: 'https://allaboutstevejobs.com/'},

    {theQuote: "Behind closed doors, we're all the fat uncool kid", theCiting: 'Su-Mari Diedericks ', theReference: 'https://www.goodreads.com/quotes/786826-behind-closed-doors-we-re-all-the-fat-uncool-kid'},

    {theQuote: "The final forming of a person's character lies in their own hands", theCiting: 'Anne Frank', theReference: 'https://www.annefrank.org/en/'},

    {theQuote: 'We meet no ordinary people in our lives', theCiting: 'C.S. Lewis', theReference: 'https://www.cslewis.com/us/'},

    {theQuote: 'History will be kind to me for I intend to write it', theCiting: 'Winston Churchill', theReference: 'https://winstonchurchill.org/'},
    
    {theQuote: 'If we all did the things we are capable of, we would literally astound ourselves.', theCiting: 'Thomas Edison', theReference: 'https://en.wikipedia.org/wiki/Thomas_Edison'},
];



for(let i = 0; i < quotesCollection.length; i++){
    const aContainerTag = document.createElement('a');
    const quoteBox = document.createElement('div');
    const quote = document.createElement('q');
    const cite = document.createElement('cite');
    const reference = document.createElement('a');
    aContainerTag.appendChild(quoteBox);
    quotesContainer.appendChild(aContainerTag);
    quoteBox.appendChild(quote);
    quoteBox.appendChild(cite);
    cite.appendChild(reference);

    quoteBox.setAttribute('class', 'quote-box')
    reference.setAttribute('href', quotesCollection[i].theReference);
    aContainerTag.setAttribute('href', quotesCollection[i].theReference);
    
    quote.innerText = quotesCollection[i].theQuote;
    reference.innerText = quotesCollection[i].theCiting;
}


