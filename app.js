$(document).ready(function(){
	$('form').submit(function (event){
		event.preventDefault();

		$('.text-report').removeClass('hidden');

		function getRawText(){
				return $('textarea').val();
		 }

		function getTokens(rawString) {
		   return rawString.toLowerCase().split(/[\n ,!.";:-]+/).filter(Boolean).sort();
		}

		var cleanArray = getTokens(getRawText());

		var textLength = cleanArray.length;
		
		$('dd.numberOfWords').text("is " + textLength);

		//unique word count
		function tallyWords(arr){
			tally = {};
			for (i = 0; i < textLength; i++){
				//tally[arr[i]] = tally[arr[i]] + 1 || 1;
				if(tally[arr[i]]){
					tally[arr[i]] = tally[arr[i]] + 1;
				}else{
					tally[arr[i]] = 1;
				}
			}
			return tally;
		}

		var tallyObject = tallyWords(cleanArray);

		var uniques = Object.keys(tallyObject).length;
		console.log("numberOfUnqies is " + uniques);
		$('dd.numberOfUnqies').text("is " + uniques);

	
		//average word length
		function getTotalLetters(arr){
			var soFar = 0;
			for(i = 0; i < textLength; i++){
				soFar += arr[i].length;
			}	
			return soFar;
		}

		var averageWordLength = getTotalLetters(cleanArray) / textLength;
		var roundedAverageWordLength = Math.round(averageWordLength * 100) / 100;

		$('dd.averageWordLength').text("is " + roundedAverageWordLength);



		//$('.container').html("cleanArray is " + cleanArray);
	}); //form.submit
}); //document.ready

