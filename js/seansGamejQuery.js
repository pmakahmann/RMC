$(window).on('load', function() {

  var customer = prompt("You're just doing a cycle count, minding your own business.  Suddenly, a customer appears! Do you FIGHT him, SELL to him, or RUN?").toUpperCase();
  // can you place the var placeholder variable here outside of the JavaScript to keep from recreating it in every case?
  switch(customer) {
    case 'FIGHT':
      var vegasfuel = prompt("How courageous! Did you have your Vegas Fuel Today (YES or NO)?").toUpperCase();
      var mod = prompt("Are you the manager on duty and angry at everyone?").toUpperCase();
      var placeholder = document.getElementById("placeholder");
      if(vegasfuel === 'YES' && mod === 'YES') {
        placeholder.innerHTML="You are seriously amped up today! You take a swipe at the customer with your clipboard and they run away screaming something about shopping at a competitor from now on!";
      } else if (vegasfuel ==='YES' || mod === 'YES') {
        placeholder.innerHTML="Only one of the two?  You're not on your A game and will not win this fight.  You are totally going to get stuck selling this guy a printer.  Don't forget the ink and Square trade.  Better luck next time.";
      } else {
        placeholder.innerHTML="You're apparently not amped up enough to win this epic battle.  Next time, focus your anger with caffeine and manager calls to the register for irrelevant and pedantic reasons!";
      }
      break;
    case 'SELL':
      var squaretrade = prompt("Wow, really?! Are you goint to offer them an extended warranty?").toUpperCase();
      var effort = prompt("Are you giving it more than a 10% effort today?").toUpperCase();
      var placeholder = document.getElementById("placeholder");
      if(squaretrade === 'YES' && effort === 'YES') {
        placeholder.innerHTML="Great! Sell them all the things they don't need and take all of their money.  Mwahahaha!";
      } else {
        placeholder.innerHTML="I didn't think you were wanting to sell anything today.  Just call a tech over and pawn this one off my good man.";
      }
      break;
    case 'RUN':
      var fast = prompt("Red alert!  We're trying this. Are you swift footed today (YES or NO)?").toUpperCase();
      var eyecontact = prompt("Did the customer make eye contact with you yet?").toUpperCase();
      var placeholder = document.getElementById("placeholder");
      if(fast === 'YES' && eyecontact === 'NO') {
        placeholder.innerHTML="Duck and cover!!! Duck and cover!!!  You are one lucky guy.  You make it back to the warehouse and hide until they leave.";
      } else if (fast === 'NO' && eyecontact=== 'NO') {
        placeholder.innerHTML="Close call. You almost didn't make it.  Take a victory lap around the warehouse, but you might not be so lucky next time.";
      } else if (fast === 'YES' && eyecontact=== 'YES') {
        placeholder.innerHTML="Close call. You almost didn't make it.  Take a victory lap around the warehouse, but you might not be so lucky next time.";
      } else {
        placeholder.innerHTML="You're not fast AND they made eye contact? You never had a chance!  You'll never get your job done now.";
      }
      break;
    default:
      var placeholder = document.getElementById("placeholder");
      placeholder.innerHTML="I didn't understand your choice. Hit Run and try again, this time picking FIGHT, SELL, or RUN!";
  };
});
  // This code works well now, but you can still enter gibberish into the run case and it will default to the else statement.  Fix this.
