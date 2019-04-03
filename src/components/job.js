import React from 'react';
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';

export default class Job extends React.Component {

	render() {
		return (
			<tr>
				<th scope="row">{this.props.offer.id}</th>
				<td>{this.props.offer.name}</td>
				<td>{this.props.offer.company}</td>
				<td>{this.props.offer.salary + " "}
					<FormattedPlural
						value={this.props.offer.salary}
						one="million"
						other="millions"
					/>
				</td>
				<td>{this.props.offer.city}</td>
				<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
					{" ("}

					<FormattedMessage
						id="DaysAgo"
						values={{
							num: Math.ceil((new Date() - new Date(this.props.offer.date)) / (24 * 60 * 60 * 1000)),
							days: <FormattedPlural
								value={Math.ceil((new Date() - new Date(this.props.offer.date)) / (24 * 60 * 60 * 1000))}
								one={<FormattedMessage id = "Day"/>}
								other={<FormattedMessage id = "Days"/>}
							/>
						}}
					/>
					{")"}
				</td>
				<td>
					<FormattedNumber
						value={this.props.offer.views}
					/>
				</td>
			</tr>
		);
	}
}