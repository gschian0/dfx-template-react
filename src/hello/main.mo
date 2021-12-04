import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Int32 "mo:base/Int32";
import Nat64 "mo:base/Nat64";
import Prim "mo:prim";

actor  {
    var time : Int = 0;
    stable var counter = 0;

  // Get the value of the counter.
  public query func get() : async Nat {
    return counter;
  };

  // Set the value of the counter.
  public func set(n : Nat) : async () {
    counter := n;
  };

  public shared(msg) func getPrincipal() : async Principal {
      var CallerId = msg.caller;
      return CallerId;
  };
  
  public func getTime() : async Int {
      time := Time.now();
      return time;
  };



  public func increment() : async Nat {
      counter += 1;
      return counter;
  };

    public func getCounter() : async Nat {
      return counter;
  };

  

}