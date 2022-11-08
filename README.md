Goal

Create an application for searching and booking airline tickets.

Architecture

The application will be composed of a layer (frontend) made in React.
The React layer must exchange information with different services created with Java. Several
microservices must be designed to serve to cover the different functionality required.
Minimum required microservices
The price requests according to some indicated parameters.
The flight reservation
Information about access to the application.
User-facing functionality
You must present a list of origins (minimum 5 origins). Once the origin has been selected, the
API must be queried to obtain the possible destinations. After selecting the destination, a form
will appear where you can select if it is a one-way or round trip.
The search must return different possibilities throughout the same day for the selected date, the
3 days before and the 3 days after the selected date. If any of the days prior to the searched
date is less than the current day, you must add a day to the following days.
The returned information must include both the company, the flight number, the time and day
of departure, the transit time, if there is a layover (and how many), if it allows luggage in the
cabin and the price of the journey.
You should be able to filter the results by the following parameters:
Air Line
scales
Whether or not to allow luggage
By schedule
Once a flight has been selected, the passengers on the flight will be asked, initially showing the
fields to know the information of a single passenger. The necessary fields will be:

<b>Edit: the contributor PGriv is mentioned as Petros Grivas inside the project contributes.</b>
