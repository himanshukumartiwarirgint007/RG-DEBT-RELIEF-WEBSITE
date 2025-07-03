import React, { useState, useEffect } from "react";
import applyNowImg from '../assets/Media/apply.png';
import ChatIcon from "../assets/Media/chat.png";
import CalculatorIcon from "../assets/Media/Calculator.png";
import CoinIcon from "../assets/Media/coin.png";
import xyz from "../assets/Media/xyz.png";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bestTimeToCall: "",
  consent: false,
  state: "",
  city: "",
  zipCode: "",
  disclaimerConsent: false,
};

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
  "New Hampshire", "New Jersey", "New Mexico", "New York", 
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
  "West Virginia", "Wisconsin", "Wyoming"
];

const cityOptions = {
  
  "Alabama": ["Alexander City", "Andalusia", "Anniston", "Athens", "Atmore", "Auburn", "Bessemer", "Birmingham", "Chickasaw", "Clanton", "Cullman", "Decatur", "Demopolis", "Dothan", "Enterprise", "Eufaula", "Florence", "Fort Payne", "Gadsden", "Greenville", "Guntersville", "Huntsville", "Jasper", "Madison", "Marion", "Mobile", "Montgomery", "Opelika", "Ozark", "Phenix City", "Prichard", "Scottsboro", "Selma", "Sheffield", "Sylacauga", "Talladega", "Troy", "Tuscaloosa", "Tuscumbia", "Tuskegee"],
  "Alaska": ["Anchorage", "Cordova", "Fairbanks", "Haines", "Homer", "Juneau", "Ketchikan", "Kodiak", "Kotzebue", "Nome", "Palmer", "Seward", "Sitka", "Skagway", "Valdez"],
  "Arizona": ["Ajo", "Avondale", "Bisbee", "Casa Grande", "Chandler", "Clifton", "Douglas", "Flagstaff", "Florence", "Gila Bend", "Glendale", "Globe", "Kingman", "Lake Havasu City", "Mesa", "Nogales", "Oraibi", "Phoenix", "Prescott", "Scottsdale", "Sierra Vista", "Tempe", "Tombstone", "Tucson", "Walpi", "Window Rock", "Winslow", "Yuma"],
  "Arkansas": ["Arkadelphia", "Arkansas Post", "Batesville", "Benton", "Blytheville", "Camden", "Conway", "Crossett", "El Dorado", "Fayetteville", "Forrest City", "Fort Smith", "Harrison", "Helena", "Hope", "Hot Springs", "Jacksonville", "Jonesboro", "Little Rock", "Magnolia", "Morrilton", "Newport", "North Little Rock", "Osceola", "Pine Bluff", "Rogers", "Searcy", "Stuttgart", "Van Buren", "West Memphis"],
  "California": ["Alameda", "Alhambra", "Anaheim", "Antioch", "Arcadia", "Bakersfield", "Barstow", "Belmont", "Berkeley", "Beverly Hills", "Brea", "Buena Park", "Burbank", "Calexico", "Calistoga", "Carlsbad", "Carmel", "Chico", "Chula Vista", "Claremont", "Compton", "Concord", "Corona", "Coronado", "Costa Mesa", "Culver City", "Daly City", "Davis", "Downey", "El Centro", "El Cerrito", "El Monte", "Escondido", "Eureka", "Fairfield", "Fontana", "Fremont", "Fresno", "Fullerton", "Garden Grove", "Glendale", "Hayward", "Hollywood", "Huntington Beach", "Indio", "Inglewood", "Irvine", "La Habra", "Laguna Beach", "Lancaster", "Livermore", "Lodi", "Lompoc", "Long Beach", "Los Angeles", "Malibu", "Martinez", "Marysville", "Menlo Park", "Merced", "Modesto", "Monterey", "Mountain View", "Napa", "Needles", "Newport Beach", "Norwalk", "Novato", "Oakland", "Oceanside", "Ojai", "Ontario", "Orange", "Oroville", "Oxnard", "Pacific Grove", "Palm Springs", "Palmdale", "Palo Alto", "Pasadena", "Petaluma", "Pomona", "Port Hueneme", "Rancho Cucamonga", "Red Bluff", "Redding", "Redlands", "Redondo Beach", "Redwood City", "Richmond", "Riverside", "Roseville", "Sacramento", "Salinas", "San Bernardino", "San Clemente", "San Diego", "San Fernando", "San Francisco", "San Gabriel", "San Jose", "San Juan Capistrano", "San Leandro", "San Luis Obispo", "San Marino", "San Mateo", "San Pedro", "San Rafael", "San Simeon", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Monica", "Santa Rosa", "Sausalito", "Simi Valley", "Sonoma", "South San Francisco", "Stockton", "Sunnyvale", "Susanville", "Thousand Oaks", "Torrance", "Turlock", "Ukiah", "Vallejo", "Ventura", "Victorville", "Visalia", "Walnut Creek", "West Covina", "Whittier", "Woodland", "Yorba Linda", "Yuba City"],
  "Colorado": ["Alamosa", "Aspen", "Aurora", "Boulder", "Breckenridge", "Brighton", "Canon City", "Central City", "Climax", "Colorado Springs", "Cortez", "Cripple Creek", "Denver", "Durango", "Englewood", "Estes Park", "Fort Collins", "Fort Morgan", "Georgetown", "Glenwood Springs", "Golden", "Grand Junction", "Greeley", "Gunnison", "La Junta", "Leadville", "Littleton", "Longmont", "Loveland", "Montrose", "Ouray", "Pagosa Springs", "Pueblo", "Silverton", "Steamboat Springs", "Sterling", "Telluride", "Trinidad", "Vail", "Walsenburg", "Westminster"],
  "Connecticut": ["Ansonia", "Berlin", "Bloomfield", "Branford", "Bridgeport", "Bristol", "Coventry", "Danbury", "Darien", "Derby", "East Hartford", "East Haven", "Enfield", "Fairfield", "Farmington", "Greenwich", "Groton", "Guilford", "Hamden", "Hartford", "Lebanon", "Litchfield", "Manchester", "Mansfield", "Meriden", "Middletown", "Milford", "Mystic", "Naugatuck", "New Britain", "New Haven", "New London", "North Haven", "Norwalk", "Norwich", "Old Saybrook", "Orange", "Seymour", "Shelton", "Simsbury", "Southington", "Stamford", "Stonington", "Stratford", "Torrington", "Wallingford", "Waterbury", "Waterford", "Watertown", "West Hartford", "West Haven", "Westport", "Wethersfield", "Willimantic", "Windham", "Windsor", "Windsor Locks", "Winsted"],
  "Delaware": ["Dover", "Lewes", "Milford", "New Castle", "Newark", "Smyrna", "Wilmington"],
  "Florida": ["Apalachicola", "Bartow", "Belle Glade", "Boca Raton", "Bradenton", "Cape Coral", "Clearwater", "Cocoa Beach", "Cocoa-Rockledge", "Coral Gables", "Daytona Beach", "De Land", "Deerfield Beach", "Delray Beach", "Fernandina Beach", "Fort Lauderdale", "Fort Myers", "Fort Pierce", "Fort Walton Beach", "Gainesville", "Hallandale Beach", "Hialeah", "Hollywood", "Homestead", "Jacksonville", "Key West", "Lake City", "Lake Wales", "Lakeland", "Largo", "Melbourne", "Miami", "Miami Beach", "Naples", "New Smyrna Beach", "Ocala", "Orlando", "Ormond Beach", "Palatka", "Palm Bay", "Palm Beach", "Panama City", "Pensacola", "Pompano Beach", "Port St. Lucie", "Saint Augustine", "Saint Petersburg", "Sanford", "Sarasota", "Sebring", "Tallahassee", "Tampa", "Tarpon Springs", "Titusville", "Venice", "West Palm Beach", "White Springs", "Winter Haven", "Winter Park"],
  "Georgia": ["Albany", "Americus", "Andersonville", "Athens", "Atlanta", "Augusta", "Bainbridge", "Blairsville", "Brunswick", "Calhoun", "Carrollton", "Columbus", "Dahlonega", "Dalton", "Darien", "Decatur", "Douglas", "East Point", "Fitzgerald", "Fort Valley", "Gainesville", "La Grange", "Macon", "Marietta", "Milledgeville", "Plains", "Rome", "Savannah", "Toccoa", "Valdosta", "Warm Springs", "Warner Robins", "Washington", "Waycross"],
  "Hawaii": ["Hilo", "Honolulu", "Kahului", "Kaneohe", "Kapaa", "Lahaina", "Lanai City", "Lihue", "Pearl City", "Wailuku", "Waipahu"],
  "Idaho": ["Blackfoot", "Boise", "Caldwell", "Coeur d'Alene", "Hailey", "Idaho Falls", "Ketchum", "Lewiston", "Moscow", "Mountain Home", "Nampa", "Pocatello", "Rexburg", "Sun Valley", "Twin Falls"],
  "Illinois": ["Alton", "Arlington Heights", "Aurora", "Belleville", "Belvidere", "Bloomington", "Carbondale", "Champaign", "Chicago", "Cicero", "Danville", "Decatur", "Des Plaines", "East Moline", "East Peoria", "East St. Louis", "Elgin", "Elmhurst", "Evanston", "Freeport", "Galesburg", "Glenview", "Granite City", "Harrisburg", "Joliet", "Kankakee", "Moline", "Mount Vernon", "Naperville", "North Chicago", "Oak Park", "Orland Park", "Ottawa", "Peoria", "Quincy", "Rantoul", "Rock Island", "Rockford", "Skokie", "Springfield", "Urbana", "Waukegan", "Wilmette", "Zion"],
  "Indiana": ["Anderson", "Bedford", "Bloomington", "Columbus", "Connersville", "Crawfordsville", "East Chicago", "Elkhart", "Evansville", "Fort Wayne", "Gary", "Goshen", "Greencastle", "Hammond", "Huntington", "Indianapolis", "Jeffersonville", "Kokomo", "La Porte", "Lafayette", "Marion", "Michigan City", "Mishawaka", "Muncie", "New Albany", "Richmond", "South Bend", "Terre Haute", "Valparaiso", "Vincennes", "Warsaw"],
  "Iowa": ["Ames", "Boone", "Burlington", "Carroll", "Cedar Falls", "Cedar Rapids", "Clinton", "Council Bluffs", "Davenport", "Des Moines", "Dubuque", "Fort Dodge", "Indianola", "Iowa City", "Keokuk", "Marshalltown", "Mason City", "Muscatine", "Newton", "Oskaloosa", "Ottumwa", "Sioux City", "Spencer", "Waterloo", "West Des Moines"],
  "Kansas": ["Abilene", "Arkansas City", "Atchison", "Chanute", "Coffeyville", "Concordia", "Dodge City", "El Dorado", "Emporia", "Fort Scott", "Garden City", "Great Bend", "Hays", "Hutchinson", "Independence", "Junction City", "Kansas City", "Lawrence", "Leavenworth", "Liberal", "Manhattan", "McPherson", "Newton", "Olathe", "Ottawa", "Overland Park", "Parsons", "Pittsburg", "Salina", "Topeka", "Wichita"],
  "Kentucky": ["Ashland", "Barbourville", "Bardstown", "Berea", "Bowling Green", "Campbellsville", "Covington", "Danville", "Elizabethtown", "Frankfort", "Harlan", "Hazard", "Henderson", "Hopkinsville", "Lexington", "Louisville", "Madisonville", "Mayfield", "Maysville", "Middlesboro", "Morehead", "Murray", "Newport", "Owensboro", "Paducah", "Paris", "Pikeville", "Richmond", "Somerset", "Winchester"],
  "Louisiana": ["Abbeville", "Alexandria", "Bastrop", "Baton Rouge", "Bogalusa", "Bossier City", "Gretna", "Hammond", "Houma", "Kenner", "Lafayette", "Lake Charles", "Monroe", "Morgan City", "Natchitoches", "New Iberia", "New Orleans", "Opelousas", "Ruston", "Shreveport", "Slidell", "Thibodaux", "West Monroe", "Zachary"],
  "Maine": ["Auburn", "Augusta", "Bangor", "Bath", "Biddeford", "Caribou", "Eastport", "Ellsworth", "Gardiner", "Houlton", "Lewiston", "Old Town", "Portland", "Presque Isle", "Rockland", "Saco", "Sanford", "South Portland", "Waterville", "Westbrook"],
  "Maryland": ["Aberdeen", "Annapolis", "Baltimore", "Bel Air", "Bethesda", "Bowie", "Cambridge", "College Park", "Cumberland", "Easton", "Elkton", "Frederick", "Gaithersburg", "Greenbelt", "Hagerstown", "Hyattsville", "Laurel", "Rockville", "Salisbury", "Silver Spring", "Takoma Park", "Westminster"],
  "Massachusetts": ["Amherst", "Arlington", "Attleboro", "Barnstable", "Beverly", "Boston", "Braintree", "Brockton", "Brookline", "Cambridge", "Chelsea", "Chicopee", "Everett", "Fall River", "Fitchburg", "Framingham", "Gloucester", "Haverhill", "Holyoke", "Lawrence", "Leominster", "Lowell", "Lynn", "Malden", "Marlborough", "Medford", "Melrose", "Methuen", "New Bedford", "Newburyport", "Newton", "North Adams", "Northampton", "Peabody", "Pittsfield", "Quincy", "Revere", "Salem", "Somerville", "Springfield", "Taunton", "Waltham", "Watertown", "Westfield", "Woburn", "Worcester"],
  "Michigan": ["Adrian", "Alpena", "Ann Arbor", "Battle Creek", "Bay City", "Benton Harbor", "Big Rapids", "Cadillac", "Dearborn", "Dearborn Heights", "Detroit", "East Lansing", "Eastpointe", "Escanaba", "Ferndale", "Flint", "Garden City", "Grand Haven", "Grand Rapids", "Grayling", "Grosse Pointe", "Hamtramck", "Hancock", "Hazel Park", "Holland", "Houghton", "Inkster", "Iron Mountain", "Ishpeming", "Jackson", "Kalamazoo", "Lansing", "Lincoln Park", "Livonia", "Ludington", "Marquette", "Menominee", "Midland", "Monroe", "Mount Clemens", "Mount Pleasant", "Muskegon", "Niles", "Petoskey", "Pontiac", "Port Huron", "River Rouge", "Romulus", "Royal Oak", "Saginaw", "Saint Clair Shores", "Sault Ste. Marie", "South Haven", "Southfield", "St. Joseph", "Taylor", "Three Rivers", "Traverse City", "Trenton", "Troy", "Warren", "Wyandotte", "Wyoming", "Ypsilanti"],
  "Minnesota": ["Albert Lea", "Alexandria", "Austin", "Bemidji", "Bloomington", "Brainerd", "Brooklyn Center", "Brooklyn Park", "Burnsville", "Cloquet", "Columbia Heights", "Coon Rapids", "Crookston", "Duluth", "Eagan", "East Grand Forks", "Eden Prairie", "Edina", "Elk River", "Faribault", "Fergus Falls", "Fridley", "Golden Valley", "Hastings", "Hibbing", "Hopkins", "International Falls", "Inver Grove Heights", "Lakeville", "Little Falls", "Mankato", "Maple Grove", "Maplewood", "Minneapolis", "Minnetonka", "Moorhead", "New Brighton", "New Hope", "North Mankato", "Northfield", "Owatonna", "Plymouth", "Red Wing", "Richfield", "Robbinsdale", "Rochester", "Roseville", "Saint Cloud", "Saint Louis Park", "Saint Paul", "Sauk Rapids", "Shakopee", "South St. Paul", "Stillwater", "Virginia", "West St. Paul", "White Bear Lake", "Willmar", "Winona"],
  "Mississippi": ["Bay St. Louis", "Biloxi", "Canton", "Clarksdale", "Cleveland", "Columbus", "Corinth", "Greenville", "Greenwood", "Gulfport", "Hattiesburg", "Holly Springs", "Jackson", "Laurel", "Meridian", "Natchez", "Ocean Springs", "Oxford", "Pascagoula", "Philadelphia", "Starkville", "Tupelo", "Vicksburg", "West Point"],
  "Missouri": ["Belton", "Branson", "Cape Girardeau", "Columbia", "Excelsior Springs", "Ferguson", "Florissant", "Hannibal", "Independence", "Jefferson City", "Joplin", "Kansas City", "Kirksville", "Lee's Summit", "Liberty", "Maryville", "Nixa", "O'Fallon", "Poplar Bluff", "Raytown", "Rolla", "Sedalia", "Sikeston", "Springfield", "St. Charles", "St. Joseph", "St. Louis", "St. Peters", "Warrensburg", "Washington", "Webb City", "West Plains"],
  "Montana": ["Anaconda", "Belgrade", "Billings", "Bozeman", "Butte", "Columbia Falls", "Dillon", "Glendive", "Great Falls", "Hamilton", "Havre", "Helena", "Kalispell", "Laurel", "Lewistown", "Livingston", "Miles City", "Missoula", "Sidney", "Whitefish"],
  "Nebraska": ["Alliance", "Beatrice", "Bellevue", "Columbus", "Fremont", "Grand Island", "Hastings", "Kearney", "La Vista", "Lincoln", "Norfolk", "North Platte", "Omaha", "Papillion", "Scottsbluff", "South Sioux City"],
  "Nevada": ["Boulder City", "Carson City", "Elko", "Ely", "Fallon", "Henderson", "Las Vegas", "Mesquite", "North Las Vegas", "Reno", "Sparks", "Winnemucca"],
  "New Hampshire": ["Berlin", "Claremont", "Concord", "Derry", "Dover", "Franklin", "Keene", "Laconia", "Lebanon", "Manchester", "Nashua", "Portsmouth", "Rochester", "Somersworth"],
  "New Jersey": ["Atlantic City", "Bayonne", "Bloomfield", "Bridgeton", "Camden", "Clifton", "East Orange", "Elizabeth", "Hackensack", "Hoboken", "Irvington", "Jersey City", "Long Branch", "Millville", "Morristown", "New Brunswick", "Newark", "Passaic", "Paterson", "Perth Amboy", "Plainfield", "Rahway", "Trenton", "Union City", "Vineland", "West New York"],
  "New Mexico": ["Alamogordo", "Albuquerque", "Artesia", "Carlsbad", "Clovis", "Deming", "Espanola", "Farmington", "Gallup", "Hobbs", "Las Cruces", "Las Vegas", "Los Alamos", "Lovington", "Portales", "Rio Rancho", "Roswell", "Santa Fe", "Silver City", "Taos", "Truth or Consequences", "Tucumcari"],
  "New York": ["Albany", "Amsterdam", "Auburn", "Binghamton", "Buffalo", "Canandaigua", "Cohoes", "Corning", "Cortland", "Elmira", "Freeport", "Glens Falls", "Glen Cove", "Hornell", "Hudson", "Ithaca", "Jamestown", "Johnstown", "Kingston", "Lackawanna", "Little Falls", "Lockport", "Long Beach", "Mechanicville", "Middletown", "Mount Vernon", "New Rochelle", "New York", "Newburgh", "Niagara Falls", "North Tonawanda", "Nyack", "Ogdensburg", "Olean", "Oneida", "Oneonta", "Oswego", "Peekskill", "Plattsburgh", "Port Jervis", "Poughkeepsie", "Rensselaer", "Rochester", "Rome", "Rye", "Saratoga Springs", "Schenectady", "Sherrill", "Syracuse", "Tonawanda", "Troy", "Utica", "Watertown", "Watervliet", "White Plains", "Yonkers"],
  "North Carolina": ["Albemarle", "Asheboro", "Asheville", "Boone", "Burlington", "Cary", "Chapel Hill", "Charlotte", "Concord", "Durham", "Eden", "Elizabeth City", "Fayetteville", "Gastonia", "Goldsboro", "Greensboro", "Greenville", "Hickory", "High Point", "Jacksonville", "Kannapolis", "Kinston", "Lumberton", "New Bern", "Raleigh", "Rocky Mount", "Salisbury", "Sanford", "Shelby", "Statesville", "Thomasville", "Wilmington", "Wilson", "Winston-Salem"],
  "North Dakota": ["Bismarck", "Devils Lake", "Dickinson", "Fargo", "Grafton", "Grand Forks", "Jamestown", "Mandan", "Minot", "Valley City", "Wahpeton", "Watford City", "West Fargo", "Williston"],
  "Ohio": ["Akron", "Alliance", "Ashland", "Ashtabula", "Athens", "Barberton", "Bedford", "Bellefontaine", "Bowling Green", "Cambridge", "Canton", "Chillicothe", "Cincinnati", "Cleveland", "Cleveland Heights", "Columbus", "Cuyahoga Falls", "Defiance", "Delaware", "Dover", "East Cleveland", "East Liverpool", "Elyria", "Findlay", "Gallipolis", "Greenville", "Hamilton", "Kent", "Lakewood", "Lancaster", "Lima", "Lorain", "Mansfield", "Marietta", "Marion", "Martins Ferry", "Massillon", "Middletown", "Mount Vernon", "Newark", "Niles", "Norwalk", "Oberlin", "Parma", "Piqua", "Portsmouth", "Sandusky", "Springfield", "Steubenville", "Tiffin", "Toledo", "Warren", "Wooster", "Xenia", "Youngstown", "Zanesville"],
  "Oklahoma": ["Ada", "Altus", "Ardmore", "Bartlesville", "Bethany", "Broken Arrow", "Chickasha", "Claremore", "Duncan", "Durant", "Edmond", "El Reno", "Elk City", "Enid", "Guthrie", "Guymon", "Lawton", "McAlester", "Miami", "Midwest City", "Moore", "Muskogee", "Norman", "Oklahoma City", "Okmulgee", "Ponca City", "Pryor", "Sand Springs", "Sapulpa", "Shawnee", "Stillwater", "Tahlequah", "Tulsa", "Weatherford", "Woodward"],
  "Oregon": ["Albany", "Ashland", "Astoria", "Beaverton", "Bend", "Canby", "Coos Bay", "Corvallis", "Eugene", "Grants Pass", "Gresham", "Hillsboro", "Hood River", "Klamath Falls", "La Grande", "Lake Oswego", "Medford", "McMinnville", "Newberg", "Oregon City", "Pendleton", "Portland", "Redmond", "Roseburg", "Salem", "Springfield", "The Dalles", "Tigard", "Tillamook", "Tualatin", "West Linn", "Woodburn"],
  "Pennsylvania": ["Aliquippa", "Allentown", "Altoona", "Beaver Falls", "Bethlehem", "Bloomsburg", "Bradford", "Chambersburg", "Chester", "Columbia", "DuBois", "Easton", "Erie", "Franklin", "Greensburg", "Harrisburg", "Hazleton", "Hermitage", "Johnstown", "Lancaster", "Lebanon", "Lock Haven", "Lower Merion", "McKeesport", "Meadville", "Monessen", "Monongahela", "New Castle", "Norristown", "Oil City", "Philadelphia", "Pittsburgh", "Pottsville", "Reading", "Scranton", "Shamokin", "Sharon", "State College", "Stroudsburg", "Sunbury", "Uniontown", "Warren", "Washington", "West Chester", "Wilkes-Barre", "Williamsport", "York"],
  "Rhode Island": ["Barrington", "Bristol", "Central Falls", "Cranston", "East Providence", "Middletown", "Narragansett", "Newport", "North Kingstown", "Pawtucket", "Portsmouth", "Providence", "South Kingstown", "Warwick", "West Warwick", "Westerly", "Woonsocket"],
  "South Carolina": ["Aiken", "Anderson", "Beaufort", "Charleston", "Columbia", "Conway", "Darlington", "Florence", "Gaffney", "Georgetown", "Greenville", "Greenwood", "Hartsville", "Hilton Head Island", "Lancaster", "Myrtle Beach", "Newberry", "North Augusta", "North Charleston", "Orangeburg", "Rock Hill", "Spartanburg", "Sumter", "Union", "York"],
  "South Dakota": ["Aberdeen", "Belle Fourche", "Brookings", "Deadwood", "Huron", "Lead", "Madison", "Mitchell", "Mobridge", "Pierre", "Rapid City", "Sioux Falls", "Spearfish", "Sturgis", "Vermillion", "Watertown", "Yankton"],
  "Tennessee": ["Alcoa", "Bartlett", "Bristol", "Chattanooga", "Clarksville", "Cleveland", "Columbia", "Cookeville", "Dyersburg", "Elizabethton", "Franklin", "Gallatin", "Germantown", "Greeneville", "Jackson", "Johnson City", "Kingsport", "Knoxville", "La Vergne", "Lawrenceburg", "Lebanon", "Maryville", "Memphis", "Morristown", "Murfreesboro", "Nashville", "Shelbyville", "Smyrna", "Spring Hill", "Tullahoma"],
  "Texas": ["Abilene", "Allen", "Amarillo", "Arlington", "Austin", "Baytown", "Beaumont", "Brownsville", "Bryan", "Carrollton", "Cedar Hill", "College Station", "Corpus Christi", "Dallas", "Denton", "Edinburg", "El Paso", "Euless", "Flower Mound", "Fort Worth", "Frisco", "Galveston", "Garland", "Grand Prairie", "Grapevine", "Harlingen", "Houston", "Irving", "Killeen", "Laredo", "League City", "Lewisville", "Longview", "Lubbock", "McAllen", "McKinney", "Mesquite", "Midland", "Mission", "New Braunfels", "North Richland Hills", "Odessa", "Pasadena", "Pearland", "Pharr", "Plano", "Richardson", "Round Rock", "San Angelo", "San Antonio", "Sugar Land", "Temple", "Texarkana", "Texas City", "The Colony", "Tyler", "Victoria", "Waco", "Wichita Falls"],
  "Utah": ["Bountiful", "Brigham City", "Cedar City", "Clearfield", "Draper", "Layton", "Logan", "Midvale", "Murray", "Ogden", "Orem", "Payson", "Provo", "Riverton", "Roy", "Salt Lake City", "Sandy", "South Jordan", "South Salt Lake", "Spanish Fork", "Springville", "Taylorsville", "Tooele", "West Jordan", "West Valley City"],
  "Vermont": ["Barre", "Bellows Falls", "Bennington", "Brattleboro", "Burlington", "Essex Junction", "Middlebury", "Montpelier", "Newport", "Rutland", "South Burlington", "St. Albans", "St. Johnsbury", "White River Junction", "Winooski"],
  "Virginia": ["Alexandria", "Blacksburg", "Charlottesville", "Chesapeake", "Danville", "Fairfax", "Falls Church", "Fredericksburg", "Hampton", "Harrisonburg", "Hopewell", "Lexington", "Lynchburg", "Manassas", "Martinsville", "Newport News", "Norfolk", "Petersburg", "Poquoson", "Portsmouth", "Radford", "Richmond", "Roanoke", "Salem", "Suffolk", "Virginia Beach", "Waynesboro", "Williamsburg", "Winchester"],
  "Washington": ["Aberdeen", "Anacortes", "Auburn", "Bellevue", "Bellingham", "Bremerton", "Centralia", "Cheney", "Everett", "Federal Way", "Kennewick", "Kent", "Longview", "Lynnwood", "Mount Vernon", "Olympia", "Pasco", "Pullman", "Puyallup", "Redmond", "Renton", "Richland", "Seattle", "Spokane", "Tacoma", "Tumwater", "Vancouver", "Walla Walla", "Wenatchee", "Yakima"],
  "West Virginia": ["Beckley", "Bluefield", "Buckhannon", "Charles Town", "Charleston", "Clarksburg", "Elkins", "Fairmont", "Grafton", "Huntington", "Keyser", "Lewisburg", "Martinsburg", "Morgantown", "Moundsville", "New Martinsville", "Parkersburg", "Philippi", "Point Pleasant", "Princeton", "South Charleston", "St. Albans", "Weirton", "Welch", "Weston", "Wheeling", "Williamson"],
  "Wisconsin": ["Appleton", "Ashland", "Baraboo", "Beaver Dam", "Beloit", "Brookfield", "Cudahy", "Eau Claire", "Fond du Lac", "Green Bay", "Greenfield", "Janesville", "Kaukauna", "Kenosha", "La Crosse", "Madison", "Manitowoc", "Marinette", "Marshfield", "Menasha", "Menomonie", "Mequon", "Milwaukee", "Monroe", "Neenah", "New Berlin", "Oshkosh", "Racine", "River Falls", "Sheboygan", "South Milwaukee", "Stevens Point", "Superior", "Watertown", "Waukesha", "Wausau", "Wauwatosa", "West Allis", "West Bend", "Whitewater"],
  "Wyoming": ["Buffalo", "Casper", "Cheyenne", "Cody", "Douglas", "Evanston", "Gillette", "Green River", "Jackson", "Lander", "Laramie", "Rawlins", "Riverton", "Rock Springs", "Sheridan", "Torrington", "Wheatland"]
};
const timeOptions = [
  "10:00 - 2:00", "2:00 - 3:00","3:00 - 4:00", "4:00 - 5:00","5:00 - 6:00","6:00 - 7:00","7:00 - 8:00","8:00 - 9:00"
];

export default function Apply() {
  const [form, setForm] = useState(initialForm);
  const [page, setPage] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const [cityOptionsList, setCityOptionsList] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [showCityInput, setShowCityInput] = useState(false);
  const [cityInputValue, setCityInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const phoneLength = 10;

  // Email validation function
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setForm(f => ({ ...f, [name]: checked }));
    } else if (name === "phone") {
      setForm(f => ({
        ...f,
        phone: value.replace(/[^0-9]/g, "").slice(0, phoneLength),
      }));
    } else if (name === "zipCode") {
      setForm(f => ({
        ...f,
        zipCode: value.replace(/[^0-9]/g, "").slice(0, 5),
      }));
    } else if (name === "email") {
      setForm(f => ({ ...f, email: value }));
      if (value && !validateEmail(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    } else if (name === "cityInput") {
      setCityInputValue(value);
      // Filter cities based on input
      if (value) {
        const filtered = cityOptionsList.filter(city => 
          city.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCities(filtered);
      } else {
        setFilteredCities(cityOptionsList);
      }
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };
  
  // Update city options when state changes
  useEffect(() => {
    if (form.state && cityOptions[form.state]) {
      const cities = cityOptions[form.state];
      setCityOptionsList(cities);
      setFilteredCities(cities);
    } else {
      setCityOptionsList([]);
      setFilteredCities([]);
    }
    // Reset city when state changes
    setForm(f => ({ ...f, city: "" }));
    setCityInputValue("");
    setShowCityInput(false);
  }, [form.state]);
  
  const validatePage = () => {
    if (page === 1) {
      // Validate email
      if (form.email && !validateEmail(form.email)) {
        setEmailError("Please enter a valid email address");
        return false;
      }
      
      return (
        form.firstName &&
        form.lastName &&
        form.email &&
        form.phone.length === phoneLength &&
        form.bestTimeToCall &&
        form.consent
      );
    }
    if (page === 2) {
      return (
        form.state &&
        form.city &&
        form.zipCode.length === 5 &&
        form.disclaimerConsent
      );
    }
    return true;
  };
  
  const handleNext = async () => {
    if (!validatePage()) {
      alert("Please fill all required fields.");
      return;
    }
    setNextLoading(true);
    try {
      // Save partial data to backend
      await fetch("http://localhost:3001/api/apply/partial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      // Optionally handle error
    }
    setTimeout(() => {
      setPage(p => p + 1);
      setNextLoading(false);
    }, 500);
  };
  
  const handleBack = () => setPage(p => p - 1);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePage()) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      // Send data to backend
      const response = await fetch("http://localhost:3001/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      alert("Submission failed.");
    }
    setSubmitting(false);
  };
  
  const handleCitySelect = (city) => {
    setForm(f => ({ ...f, city }));
    setShowCityInput(false);
    setCityInputValue("");
  };
  
  const handleManualCity = () => {
    setShowCityInput(true);
    setCityInputValue("");
  };
  
  const saveManualCity = () => {
    if (cityInputValue.trim()) {
      setForm(f => ({ ...f, city: cityInputValue.trim() }));
      setShowCityInput(false);
    }
  };
  
  // Success screen after form submission
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#edf2fa] to-[#abc4ff] flex flex-col items-center justify-center p-6">
        
        <div className="rounded-2xl shadow-2xl max-w-4xl w-full p-8 md:p-16 text-center">
          <div className="mb-9 flex justify-center">
          <img 
            src={xyz}
            alt="Success"
            className="w-70 h-40 object-contain"
          />
        </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We'll be <span className="text-[#4b38d3]">HAPPY</span> to Assist You
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your free consultation and custom-fit plan are just a phone call away.
          </p>
          <div className="my-10 py-6 border-t border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#4b38d3] mb-4">
              Thanks for submitting your application
            </h2>
            <p className="text-lg text-gray-700">
              One of our Debt Relief Experts will be reaching out to you very soon
            </p>
          </div>
          <div className="mt-10">
            <p className="text-lg mb-4">
              Email us at: <a href="mailto:debtsettlement@reddingtonglobal.com" className="text-[#4b38d3] font-semibold">
                debtsettlement@reddingtonglobal.com
              </a>
            </p>
            <p className="text-lg">
              or you can also call us now at: 
              <span className="text-[#4b38d3] font-bold ml-2">+19545563969</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#edf2fa] to-[#abc4ff] pt-0">
      
      {/* Centered Form Container */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <form 
          className="w-[90%] max-w-4xl min-h-[600px] bg-white rounded-2xl shadow-xl flex flex-col md:flex-row mx-auto overflow-hidden"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {/* Image Section */}
          <div className="hidden md:block md:w-1/2 relative">
            <img 
              src={applyNowImg} 
              alt="Apply Now" 
              className="absolute inset-0 w-full h-full object-cover rounded-l-2xl" 
            />
          </div>
          
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-5 md:p-10 relative rounded-r-2xl">
            {/* Page 1 */}
            <div className={`${page === 1 ? "block animate-fadeIn" : "hidden"}`}>
              <label className="block mt-4 mb-1 font-bold">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <label className="block mt-4 mb-1 font-bold">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <label className="block mt-4 mb-1 font-bold">Email*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded border ${emailError ? "border-red-500" : "border-gray-300"}`}
                onBlur={() => {
                  if (form.email && !validateEmail(form.email)) {
                    setEmailError("Please enter a valid email address");
                  }
                }}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
              <label className="block mt-4 mb-1 font-bold">Phone Number*</label>
              <div className="flex gap-2">
                <div className="max-w-[110px] p-3 rounded border border-gray-300 bg-gray-100">
                  (US)+1
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  maxLength={phoneLength}
                  placeholder=" (555)-123-4567"
                  className="flex-1 p-3 rounded border border-gray-300"
                />
              </div>
              <label className="block mt-4 mb-1 font-bold">Best Time To Call*</label>
              <select
                name="bestTimeToCall"
                value={form.bestTimeToCall}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              >
                <option value="">Select Best Time</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {/* Consent Section */}
              <div className="mt-6">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-[#4b38d3]"
                  />
                  <span className="text-xs text-gray-600">
                    By providing my phone number and opting in, I consent to receive marketing SMS text messages from Reddington Global Debt Relief at the number provided, including messages sent by an automatic telephone dialing system (auto-dialer). I understand that consent is not a condition of purchase, and I can opt out at any time. I will receive 1-4 messages per month. Standard message and data rates may apply. To opt out of future messages, reply STOP. For help, reply HELP or contact us at debtsettlement@reddingtonglobal.com . For more information check our Privacy Policy
                  </span>
                </label>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={submitting}
                  className={`px-5 py-2.5 bg-[#4b38d3] text-white font-bold rounded hover:bg-[#3a2ca8] transition-all duration-300 ${
                    nextLoading ? "relative overflow-hidden" : ""
                  }`}
                >
                  {nextLoading ? (
                    <>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                      </span>
                      <span className="invisible">Processing...</span>
                    </>
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </div>
            {/* Page 2 */}
            <div className={`${page === 2 ? "block animate-fadeIn" : "hidden"}`}>
              <label className="block mt-4 mb-1 font-bold">State*</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              >
                <option value="">Select State</option>
                {states.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>            
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block mt-4 mb-1 font-bold">City*</label>
                  
                  {showCityInput ? (
                    <div className="flex">
                      <input
                        type="text"
                        name="cityInput"
                        value={cityInputValue}
                        onChange={handleChange}
                        className="w-full p-3 rounded border border-gray-300"
                        placeholder="Type your city"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={saveManualCity}
                        className="ml-2 px-3 bg-[#4b38d3] text-white rounded"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="w-full p-3 rounded border border-gray-300 bg-white flex items-center cursor-pointer"
                      onClick={() => setShowCityInput(true)}
                    >
                      {form.city || "Select or type your city"}
                    </div>
                  )}
                  
                  {showCityInput && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                      <div className="p-2 border-b">
                        <div className="text-sm text-gray-500">Type to search or select</div>
                      </div>
                      {filteredCities.length > 0 ? (
                        filteredCities.map(city => (
                          <div 
                            key={city} 
                            className="p-3 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleCitySelect(city)}
                          >
                            {city}
                          </div>
                        ))
                      ) : (
                        <div className="p-3 text-gray-500">
                          No cities found. <span className="text-blue-500 cursor-pointer" onClick={handleManualCity}>Type manually</span>
                        </div>
                      )}
                      <div 
                        className="p-3 border-t bg-gray-50 text-blue-500 cursor-pointer hover:bg-gray-100"
                        onClick={handleManualCity}
                      >
                        + Type city manually
                      </div>
                    </div>
                  )}
                  
                  {!form.state && (
                    <p className="text-xs text-red-500 mt-1">Please select state first</p>
                  )}
                </div>
                <div>
                  <label className="block mt-4 mb-1 font-bold">Zip Code*</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={form.zipCode}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    placeholder="5-digit zip"
                    className="w-full p-3 rounded border border-gray-300"
                  />
                </div>
              </div>           
              <div className="mt-6 p-4">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="disclaimerConsent"
                    checked={form.disclaimerConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-[#4b38d3]"
                    required
                  />
                  <span className="text-xs text-gray-600">
                    By clicking "Submit", I provide express written consent for RG Debt Relief to contact me via email, phone calls, and/or text messages at the phone number associated with my account. This includes communications regarding scheduling, account alerts (Reddingtonglobal alert), and authorizing account transactions. I consent to the use of any telephone dialing system, including prerecorded or artificial voice messages and/or automatic dialing devices, as applicable, for sending these communications. My phone number and SMS consent will not be shared with third parties for any reason, and Msg & data rates may apply. Messaging frequency may vary. I can text HELP for assistance or email debtsettlement@reddingtonglobal.com for additional support, and I can text STOP at any time to cancel these messages. Even if my phone number is on any state or federal Do-Not-Call list, I still authorize these communications. I understand that I can revoke this consent at any time and that opting in is not a condition for receiving services from Reddington Global Debt Relief. It is my responsibility to keep my phone number updated for these purposes.
                  </span>
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={submitting}
                  className="px-5 py-2.5 bg-gray-300 font-bold rounded hover:bg-gray-400 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-5 py-2.5 bg-[#4b38d3] text-white font-bold rounded hover:bg-[#3a2ca8] transition-all duration-300 ${
                    submitting ? "relative overflow-hidden" : ""
                  }`}
                >
                  {submitting ? (
                    <>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                      </span>
                      <span className="invisible">Submitting...</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-[#edf2fa] to-[#abc4ff] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 mb-10">
            You're in control, our debt experts do the work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div>
              <img
                src={ChatIcon}
                alt="Chat Icon"
                className="mx-auto mb-4 w-12 h-12"
              />
              <h3 className="font-semibold text-lg mb-2">
                Talk to us for a free consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Tell us your situation, then find out your debt relief options - no obligation.
              </p>
            </div>
            {/* Step 2 */}
            <div>
              <img
                src={CalculatorIcon}
                alt="Plan Icon"
                className="mx-auto mb-4 w-12 h-12"
              />
              <h3 className="font-semibold text-lg mb-2">
                We create an affordable plan that works for you
              </h3>
              <p className="text-gray-600 text-sm">
                Approve your plan, personalized from our suite of products.
              </p>
            </div>
            
            {/* Step 3 */}
            <div>
              <img
                src={CoinIcon}
                alt="Coins Icon"
                className="mx-auto mb-4 w-12 h-12"
              />
              <h3 className="font-semibold text-lg mb-2">
                Get out of debt faster than you think
              </h3>
              <p className="text-gray-600 text-sm">
                Take back your life in as little as 24-48 months.
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 0.8s linear infinite;
        }
      `}</style>
    </div>
  );
}