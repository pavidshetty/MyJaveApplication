
'use strict';
describe ('Airport' ,function () {
 var airport ;
 var plane ;


beforeEach(function(){
  var plane = new Plane();
  var airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
});
