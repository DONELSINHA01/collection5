

const prepopulatedData = {
	inbox: [
		{   
			mId: "guid-1",
			types: "inbox",
			unread: true,
			senderName: "inbox: Donel||  1",
			profile: "",
			subject: "Pre Approved Loan",
			content:
				"Congratulations! <u>Credit card<u> is being shipped to you today!",
		},
		{
			mId: "guid-2",
			types: "inbox",
			unread: true,
			senderName: "inbox: Donel||  2",
			profile: "",
			subject: "You won a lottery!",
			content:
				"You have just won the New York official lottery. Please send us your",
		},
	],
	sent: [
		{
			mId: "guid-3",
			types: "sent",
			unread: true,
			senderName: "sent:Donel|| ",
			profile: "",
			subject: "Pre Approved Loan",
			content:
				"Congratulations! Your Credit card is being shipped to you today!",
		},
		{
			mId: "guid-4",
			types: "sent",
			unread: true,
			senderName: "sent:Donel|| ",
			profile: "",
			subject: "You won a lottery!",
			content:
				"You have just won the New York official lottery. Please send us your",
		},
	],
	trash: [
		{
			mId: "guid-5",
			types: "trash",
			unread: true,
			senderName: "trash:Donel|| ",
			profile: "",
			subject: "Pre Approved Loan",
			content:
				"Congratulations! Credit card is being shipped to you today!",
		},
		{
			mId: "guid-6",
			types: "trash",
			unread: true,
			senderName: "trash:Donel|| ",
			profile: "",
			subject: "You won a lottery!",
			content:
				"You have just won the New York official lottery. Please send us your",
		},
	],
	spam: [
		{
			mId: "guid-7",
			types: "spam",
			unread: true,
			senderName: "spam:Donel|| ",
			profile: "",
			subject: "Pre Approved Loan",
			content:
				"Congratulations! Credit card is being shipped to you today!",
		},
		{
			mId: "guid-8",
			types: "spam",
			unread: true,
			senderName: "spam:Donel|| ",
			profile: "",
			subject: "You won a lottery!",
			content:
				"You have just won the New York official lottery. Please send us your",
		},
		
	],
};

for(const item in prepopulatedData){

    console.log(item+''+prepopulatedData[item]);
}

export default prepopulatedData;