// -------------------------------
// Conditional Statements.
// -------------------------------

// -----------------------------------------------------------------------
//
// Condition Statements allow your program to selectively run code
// based on specific criteria being true or false. Blow are sample
// conditions meant to illustrate the use. It will be up to you
// to determine what your program needs to run what code and when.
//
// -----------------------------------------------------------------------

const now = new Date()
const currentHour = now.getHours();

// Current hour will be a number between 0 and 23
// Finish this if / else with the correct check
// to display Good Morning and Good Afternoon at
// the right times.
if( currentHour < 12 ) {
    console.log( 'Good Morning' );
} else {
    console.log( 'Good Afternoon' );
}

// Update the statement below to reflect the evening hours.
if( currentHour < 12 ) {
    console.log( 'Good Morning' );
} else if ( currentHour > 20 ) {
    console.log( 'Good Evening' );
} else {
    console.log( 'Good Afternoon' )
}