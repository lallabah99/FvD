# Procesverslag
**Auteur:** -Lalla Bah-

**Het werk:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)


Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Nb. de standaardstructuur en de spartaanse opmaak zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.



## Bronnenlijst
1. https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
2. https://www.youtube.com/watch?v=fYq5PXgSsbE
3. https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
4. http://jsfiddle.net/binaryben/aLx3m4k5/



## Week 1

Afgelopen week ben ik aan de slag gegaan met de oefeningen. Dit ging goed bij de eerste animaties en de custom properties. Daarna was het voor mij best lastig om de sommetjes te maken. Meestal lukte de eerste vier wel en daarna ging het bergafwaarts. 

Ik heb alvast nagedacht over de logo's die ik wil animeren en zal daar dieper op in gaan in week 2. 

## Week 2
Ik ben aan de slag gegaan met de opdrachten en heb gekeken naar de mogelijkheden. Aan de hand daarvan heb ik besloten om twee compleet verschillende logo's te animeren op zo'n manier dat het goed pas bij de doelgroep. Nickelodeon wordt speels geanimeerd en Gucci chique.

Wat goed ging was het bedenken en ontwerpen van de stijlen waarin ik de logo's wil animeren. Hier haalde ik namelijk erg veel plezier uit. Ook heb ik het font goed geinstalleerd en werkt het responsive. Helaas ging het animeren niet heel goed. 

Ik ben begonnen met het eerste logo: Nickelodeon. Het lukt me om de letters vanuit het niets naar het midden te animeren. En daar houdt het helaas op. Het animeren per letter lukt mij niet ookal heb ik dit op verschillende manieren geprobeerd. Ik hoop dat ik tijdens het voortgangsgesprek te horen krijg wat ik verkeerd heb gedaan. 

Mijn plan is, als dat probleem verholpen is, om de letters per letter naar het midden te animeren. 

### Nickelodeon Logo
![nickelodeon](images/Logo's_FvD_Lalla-01.png) "Nickelodeon logo"

### Gucci Logo
![gucci](images/Logo's_FvD_Lalla-02.png) "Gucci logo"

### Eerste voortgangsgesprek
- Hoe kan ik meerdere dingen animeren?
- Waarom lukt het mij niet om per letter (span) te animeren?

scalex en scaley om langer te maken

0 en 10% en 10 - 90 helemaal niks en daarna weg
en de animatie duurt 10s

## Week 3

Deze week is het, met behulp van de tips tijdens het voortgangsgesprek, mij gelukt om alle letters van Nickelodeon op zijn eigen manier te laten bewegen. Dit ziet er erg speels en grappig uit. Waar ik nu nog moeite mee heb is om ze dan weer gezamelijk te laten bewegen. Helaas kan ik deze week niet bij het voortgangsgesprek zijn. Wel kan ik in het kanaal en aan klasgenoten vragen hoe dit nog kan.

Ik merk dat ik het moeilijk vind om door te gaan naar de volgende stap als de eerste nog niet helemaal af is. Dat komt omdat ik te lang blijf hangen in kleine stapjes. Als het te lang niet lukt vind ik het lastig om nog motivatie te vinden. Gelukkig heb ik ook veel gehad aan google en youtube.

## Meivakantie

## Week 5

Ik heb me in de meivakantie voorbereid op de eindpresentatie. Ik was erg lang bezig met het nickelodeon logo en ben eignelijk te laat begonnen met het gucci logo. Daarom heb ik me bij GUCCI niet helemaal aan het script gehouden wat ik bedacht. Wel vind ik dat beide animaties goed passen bij het merk.

Hoewel er een aantal dingen zijn die ik liever anders had gedaan, ben ik tevreden met mijn werk. Hij werkt voor dark en light mode en heeft een vloeiende overgang. Eerst was dit niet zo. Je zag eerst precies waar welk percentage zat en de animatie verliep nogal houterig. Dat is nu vrijwel verholpen.

Al met al zijn de afgelopen weken erg leerzaam geweest en ben ik weer een stapje verder met frontend voor designers. Het is niet geheel vlekkeloos gegaan maar ik vind het fijn om vooruitgang te zien. 

Wat ik anders had willen doen maar geen tijd voor heb gehad:
- vw gebruiken ipv em bij de afstand links van nickelodeon, zodat het beter responsive werkt
- nog een vorm toevoegen aan het Gucci logo
- dark en light mode laten werken via een toggle button

## Presentatie

De presentatie verliep goed, ik koos er voor om als eerste te gaan zodat ik tips kon krijgen en daarna goed kon focussen op de anderen. Ik heb een aantal tips gehad die erg handig zijn om toe te passen op mijn code:

1. Als je de opacity op 0 zet kan het logo niet gelezen worden door screenreaders en als het klikbaar is, kunnen mensen er per ongeluk op klikken. Ipv opacity:0; kan ik beter color:transparent; gebruiken of scale:0;.
2. Het is goed dat ik nth-of-type(2) heb gebruikt, maar het zou handig zijn als ik met commentaar erbij zou zetten over welke letter het gaat zodat ik niet in de war raak.
3. Bij GUCCI is het eignelijk onnodig dat ik per letter een eigen animatie heb gemaakt waarbij de percentages later scalen. In plaats daarvan had ik gewoon een animation-delay:1s; kunnen gebruiken. 


## Vragen
- Hoe zorg je dat je content onder de fixed header valt
- Hoe kan het dat ik alleen de eerste film selecteer en waarom werkt queryselectorall niet?
- Hoe kan ik iets toevoegen aan favorieten