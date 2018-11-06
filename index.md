## Traffic congestion in Boston for 2015 data
These congestion maps were created using real traffc data from the Eastern Massachusetts road
network captured by the leading private company on traffic data collection INRIX. The
dataset was provided by the Central Transportation Planning Staff (CTPS) of the Boston Metropolitan Planning Organization (MPO).
It consists of millions of observed vehicle speeds on more than 12,000 road segments in the area. The speeds were captured in real-time using vehicle-probe technology (i.e. captured from mobile phones, GPS sensors in 
eet vehicles, connected cars and road-based sensors).
This collection of data contains average vehicle speeds on a minute-by-minute basis for the entire year. The study by [Zhang et. al](http://people.bu.edu/jzh/) uses the 2012 database (250 GB) to perform the analysis. Recently we obtained a bigger dataset for year 2015 consisting of around 500 GB which will be the basis for future research in this topic. To estimate the capacity of each road segment we use the CTPS Travel Demand Model
(TDM) and MassDot Road Inventory 2016 databases which contain engineering characteristics (number of lanes) and typical traffic patterns of each road segment. The TDM and MassDot databases cover more than 500,000 road segments in eastern MA and contain estimates of average weekday traffic volumes partitioned by vehicle type,
time-of-day, and peak capacity for each road segment.

In this maps, we calculated the density of each TMC using the Greenshield model, then we compare this value with the capacity of TMC and indicate if the TMC was congested in that time interval or not. Then we add up all the congested time and plot the hours that each TMC experienced congestion. 

[Congestion by time interval (TMC level)](road_all/index.html)
[2012 - 2015 Congestion comparison (TMC level](road_comp/index.html)
[2012 - 2015 Congestion comparison (ZipCode)](zips_comp/index.html)


## Related Publications
Jing Zhang, Sepideh Pourazarm, Christos G. Cassandras, and Ioannis Ch. Paschalidis, "***The Price of Anarchy in Transportation Networks by Estimating User Cost Functions from Actual Traffic Data***," Proceedings of the 55th IEEE Conference on Decision and Control, pp. 789-794, December 12-14, 2016, Las Vegas, NV, USA, Invited Session Paper.

Jing Zhang, Sepideh Pourazarm, Christos G. Cassandras, and Ioannis Ch. Paschalidis, "***Data-driven Estimation of Origin-Destination Demand and User Cost Functions for the Optimization of Transportation Networks***," The 20th World Congress of the International Federation of Automatic Control, July 9-14, 2017, Toulouse, France, accepted as Invited Session Paper. [arXiv:1610.09580](https://arxiv.org/abs/1610.09580#)

Jing Zhang and Ioannis Ch. Paschalidis, "***Data-Driven Estimation of Travel Latency Cost Functions via Inverse Optimization in Multi-Class Transportation Networks***," Proceedings of the 56th IEEE Conference on Decision and Control, December 12-15, 2017, Melbourne, Australia, submitted. [arXiv:1703.04010](https://arxiv.org/abs/1703.04010)

Jing Zhang, Sepideh Pourazarm, Christos G. Cassandras, and Ioannis Ch. Paschalidis, "***The Price of Anarchy in Transportation Networks: Data-Driven Evaluation and Reduction Strategies***," Proceedings of the IEEE: special issue on "Smart Cities," in preparation.
