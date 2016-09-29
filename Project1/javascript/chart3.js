var opacity = 0.1;
var presentColor = "";
var state = null;
var previousColor = "";

   function pickcolor(category, percent){
      if(category == "HighschoolOrMore"){
      if(64 <= percent && percent < 68)
         return "#ffe0cc";
      else if(68 <= percent && percent < 72)
         return "#ffc299";
      else if(72 <= percent && percent < 76)
         return "#ffa366";
      else if(76 <= percent && percent < 80)
         return "#ff8533";
      else if(80 <= percent && percent < 84)
         return "#ff6600";
      else if(84 <= percent && percent < 88)
         return "#cc5200";
      else if(88 <= percent && percent < 92)
         return "#993d00";
      }
      else if(category == "BachelorOrMore"){
      if(12 <= percent && percent < 18)
         return "#e6f5ff";
      else if(18 <= percent && percent < 24)
         return "#b3e0ff";
      else if(24 <= percent && percent < 30)
         return "#80ccff";
      else if(30 <= percent && percent < 36)
         return "#4db8ff";
      else if(36 <= percent && percent < 42)
         return "#1aa3ff";
      else if(42 <= percent && percent < 48)
         return "#008ae6";
      else if(48 <= percent && percent < 54)
         return "#006bb3";
      }
      else if(category == "AdvancedOrMore"){
      if(4 <= percent && percent < 8)
         return "#d8f3d8";
      else if(8 <= percent && percent < 12)
         return "#b1e7b1";
      else if(12 <= percent && percent < 16)
         return "#8adb8a";
      else if(16 <= percent && percent < 20)
         return "#4fc94f";
      else if(20 <= percent && percent < 24)
         return "#36b036";
      else if(24 <= percent && percent < 28)
         return "#2a892a";
      else if(28 <= percent && percent < 32)
         return "#1e621e";
      }
      }

      function hue(){
         var colorAccount = 7;
         var table = $(".scale").children("table");
         var rows = "";

              for(var i = 0;i<colorAccount;i++){
                 var row = "<tr><td id = 'color"+i+"'></td><td id = 'percentage"+i+"'></td></tr>";
                 rows = rows +row;
              }
              //console.log(table);

              table.append(rows);

         $("input:radio[id='option1']").change(function (){
              $("table tr").empty();
              var colorAccount = 7;

              var table = $(".scale").children("table");
              var rows = "";

              for(var i = 0;i<colorAccount;i++){
                 var row = "<tr><td id = 'color"+i+"'></td><td id = 'percentage"+i+"'></td></tr>";
                 rows = rows +row;
              }
             // console.log(table);

              table.append(rows);
               //console.log("Highschool")
               var color = ["#ffe0cc","#ffc299","#ffa366","#ff8533","#ff6600","#cc5200","#993d00"];
               var percentage = ["[64%-68%)","[68%-72%)","[72%-76%)","[76%-80%)","[80%-84%)","[84%-88%)","[88%-92%)"];
               for(var i = 0;i<colorAccount;i++){
                 var id = "#color"+i;
                 var pid = "#percentage"+i;

                 $(id).width("25px").height("20px");

                 $(id).css("background-color",color[i]);
                 $(pid).append(percentage[i]);
                 //console.log(id);

              }
             });


              $("input:radio[id='option2']").change(function (){
            $("table tr").empty();
                                      var colorAccount = 7;

              var table = $(".scale").children("table");
              var rows = "";

              for(var i = 0;i<colorAccount;i++){
                 var row = "<tr><td id = 'color"+i+"'></td><td id = 'percentage"+i+"'></td></tr>";
                 rows = rows +row;
              }
             //console.log(table);

              table.append(rows);
             // console.log("Banchelor")
               var color = ["#e6f5ff","#b3e0ff","#80ccff","#4db8ff","#1aa3ff","#008ae6","#006bb3"];
               var percentage = ["[12%-18%)","[18%-24%)","[24%-30%)","[30%-36%)","[36%-42%)","[42%-48%)","[48%-54%)"];
               for(var i = 0;i<colorAccount;i++){
                 var id = "#color"+i;
                 var pid = "#percentage"+i;

                 $(id).width("25px").height("20px");

                 $(id).css("background-color",color[i]);
                 $(pid).append(percentage[i]);
                 //console.log(id);

              }

             });


            $("input:radio[id='option3']").change(function (){
            $("table tr").empty();
            var colorAccount = 7;

            var table = $(".scale").children("table");
            var rows = "";

            for(var i = 0;i<colorAccount;i++){
               var row = "<tr><td id = 'color"+i+"'></td><td id = 'percentage"+i+"'></td></tr>";
               rows = rows +row;
            }
              //console.log(table);

            table.append(rows);
             // console.log("master")
            var color = ["#d8f3d8","#b1e7b1","#8adb8a","#4fc94f","#36b036","#2a892a","#1e621e"];
            var percentage = ["[4%-8%)","[8%-12%)","[12%-16%)","[16%-20%)","[20%-24%)","[24%-28%)","[28%-32%)"];
            for(var i = 0;i<colorAccount;i++){
                  var id = "#color"+i;
                  var pid = "#percentage"+i;

                 $(id).width("25px").height("20px");

                 $(id).css("background-color",color[i]);
                 $(pid).append(percentage[i]);
                 //console.log(id);

              }

             });





           }
   var dataChoose =new Array();
   dataChoose[0] = "HighschoolOrMore";
   dataChoose[1] = "2000";
   function year(callback){
      $(".slider").on("input",function(){
         var value = $(".slider").val();
         //console.log(value);
         switch(value){
            case "0":
               $("#a").css("color","#0099ff");
               $("#b").css("color","#f1f1f1");
               $("#c").css("color","#f1f1f1");
               $("#d").css("color","#f1f1f1");
               $("#e").css("color","#f1f1f1");
               dataChoose[1] = "2000";
               console.log(dataChoose);
               callback(dataChoose[1]);
               break;
            case "1":
               $("#a").css("color","#f1f1f1");
               $("#b").css("color","#0099ff");
               $("#c").css("color","#f1f1f1");
               $("#d").css("color","#f1f1f1");
               $("#e").css("color","#f1f1f1");
               dataChoose[1] = "2006";
               console.log(dataChoose);
               callback(dataChoose[1]);
               break;
            case "2":
               $("#a").css("color","#f1f1f1");
               $("#b").css("color","#f1f1f1");
               $("#c").css("color","#0099ff");
               $("#d").css("color","#f1f1f1");
               $("#e").css("color","#f1f1f1");
               dataChoose[1] = "2007";
               console.log(dataChoose);
               callback(dataChoose[1]);
               break;
            case "3":
               $("#a").css("color","#f1f1f1");
               $("#b").css("color","#f1f1f1");
               $("#c").css("color","#f1f1f1");
               $("#d").css("color","#0099ff");
               $("#e").css("color","#f1f1f1");
               dataChoose[1] = "2008";
               console.log(dataChoose);
               callback(dataChoose[1]);
               break;
            case "4":
               $("#a").css("color","#f1f1f1");
               $("#b").css("color","#f1f1f1");
               $("#c").css("color","#f1f1f1");
               $("#d").css("color","#f1f1f1");
               $("#e").css("color","#0099ff");
               dataChoose[1] = "2009";
               console.log(dataChoose);
               callback(dataChoose[1]);
               break;
            default:
               callback(dataChoose[1]);

         }
      });
      //console.log(data);

   }

   function category(callback){

      $('.btn-group').on('change', function() {
         var category = $('input[name="options"]:checked').val();
         //categoryValue(category);
         opacity = 0.1;
         presentColor = "";
         state = null;
         previousColor = "";
         dataChoose[0] = category;
         console.log(dataChoose);
         callback(dataChoose[0]);
      });
   }

   function drawColor(d){

      d3.json("./statesEducation1.json",function(error,data){
         var statesData = data.states;
         for(var j = 0; j<statesData.length;j++){
               var id = "#"+statesData[j].Abbreviation;

               var year = dataChoose[1];
               var category = dataChoose[0];
               //console.log(year,category);
               var h = statesData[j].data[year][category];
               //console.log(h);
               //console.log(h);
               var color = pickcolor(category,h);
               $(id).attr("fill",color);

         }
      });


   }


   function drawMap(){

      var width = $(".chart3").width();
      var height = Math.ceil(width/16*9);
      console.log(width,height);
      var margin = {top:40,right:40,bottom:40,left:40};
      $(".chart3").height(height);


      var svg = d3.select(".chart3").append("svg")
                  .attr("width",width)
                  .attr("height",height)
                  .style("background-color","white");

      var projection = d3.geoAlbersUsa()
                        .translate([width/2, height/2])    // translate to center of screen
                        .scale([900]);
                        // .translate([width/2, height/3]);
      var path = d3.geoPath()
            .projection(projection);





            $("table tr").empty();
            var colorAccount = 7;

            var table = $(".scale").children("table");
            var rows = "";

            for(var i = 0;i<colorAccount;i++){
               var row = "<tr><td id = 'color"+i+"'></td><td id = 'percentage"+i+"'></td></tr>";
               rows = rows +row;
            }
                            // console.log(table);

            table.append(rows);
                              //console.log("Highschool")
            var color = ["#ffe0cc","#ffc299","#ffa366","#ff8533","#ff6600","#cc5200","#993d00"];
            var percentage = ["[64%-68%)","[68%-72%)","[72%-76%)","[76%-80%)","[80%-84%)","[84%-88%)","[88%-92%)"];
            for(var i = 0;i<colorAccount;i++){
               var id = "#color"+i;
               var pid = "#percentage"+i;

               $(id).width("25px").height("20px");

               $(id).css("background-color",color[i]);
               $(pid).append(percentage[i]);
                                //console.log(id);

            }


/////////////////////////////////// json ///////////////
      d3.json("./statesEducation1.json",function(error,data){
         if(error){
            return console.log(error);
         }
         var statesData = data.states;// data for each state
         //console.log(statesData);



         //console.log(statesData);
         d3.json("./USA.json", function(error, root) {
            if (error)
                 return console.error(error);


            for(var i = 0;i<root.features.length;i++){
               var stateNameFromMap = root.features[i].properties.name;
               //console.log(stateNameFromMap);

               for(var j = 0; j<statesData.length;j++){

                  var stateNameFromData = statesData[j].name;
                  if(stateNameFromData == stateNameFromMap){

                     root.features[i].properties.note = stateNameFromMap.postal;

                  }

               }
            }



            svg.append('g').selectAll("path")
               .data(root.features)
               .enter()
               .append("path")
               .attr("stroke","white")
               .attr("stroke-width",1)
               .attr("d", path)
               .attr("fill",function(d){
                  for(var j = 0; j<statesData.length;j++){
                     if(statesData[j].Abbreviation == d.properties.postal){
                        console.log(d.properties.postal);
                        var h = statesData[j].data[2000].HighschoolOrMore;
                        console.log(h);
                        return pickcolor("HighschoolOrMore",h);

                     }

                  }

               })
               .attr("id",function(d){
                  return d.properties.postal;

               })
               .on("mouseover",function(d){
                  //console.log(this);
                  presentColor = $(this).attr("fill");
                  d3.select(this)
                        .style("opacity","0.5")
                        .style("cursor","pointer");

               })
               .on("mouseout",function(d){
                  d3.select(this)
                     .style("opacity","1");

               })
               .on("click",function(d){
                  if(state == null){
                     state = $(this);
                     previousColor = $(this).attr("fill");
                     state.attr("fill","#bfbfbf");

                  }
                  else{
                     state.attr("fill",previousColor);
                     state = $(this);
                     previousColor = $(this).attr("fill");
                     state.attr("fill","#bfbfbf");

                  }
                  drawBar($(this).attr("id"));
               });




         });
      });

   }

   function drawBar(id){
      console.log(id)

         //jQuery('.iframeID')[0].reload();

   }



   $(document).ready(function(){
      drawMap(dataChoose);
      category(drawColor);
      year(drawColor);
      hue();
   });
