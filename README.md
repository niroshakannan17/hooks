# hooks

ngonchange : is called only primitive datatype.
it does not support non primative data type

ngoninit : can called only after the ngonchange.
it is mainly used for suppose the components require some data,
those data can be added(capture) by using ngoninit

ngdocheck: it mainly used to check any changes happen in a array or object
simiple check non primative datatype 
this ngdocheck can call all keybord event and submit