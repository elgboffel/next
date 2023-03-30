import { Static, Type } from "@sinclair/typebox";

export const GetContextQuerySchema = Type.Object({
	id: Type.Number(),
});

export const GetContextReplySchema = Type.Object({
	id: Type.Number(),
	name: Type.String(),
	createdDate: Type.String(),
	updatedDate: Type.String(),
	item: Type.Object({
		fields: Type.Array(
			Type.Union([
				Type.Object({
					name: Type.String(),
					systemName: Type.String(),
					value: Type.String(),
				}),
				Type.Object({
					name: Type.String(),
					systemName: Type.String(),
					value: Type.Boolean(),
				}),
				Type.Object({
					name: Type.String(),
					systemName: Type.String(),
					value: Type.Object({
						pageId: Type.Number(),
						paragraphId: Type.Number(),
						url: Type.String(),
						isExternal: Type.Boolean(),
					}),
				}),
				Type.Object({
					name: Type.String(),
					systemName: Type.String(),
					value: Type.Object({
						options: Type.Array(
							Type.Object({
								value: Type.String(),
								name: Type.String(),
								icon: Type.String(),
								isSelected: Type.Boolean(),
								sortIndex: Type.Number(),
							})
						),
						selectedOptions: Type.Array(
							Type.Object({
								value: Type.String(),
								name: Type.String(),
								icon: Type.String(),
								isSelected: Type.Boolean(),
								sortIndex: Type.Number(),
							})
						),
						selectedNames: Type.Array(Type.String()),
						selectedName: Type.String(),
						selectedValues: Type.Array(Type.String()),
						selectedValue: Type.String(),
					}),
				}),
				Type.Object({ name: Type.String(), systemName: Type.String(), value: Type.Unknown() }),
				Type.Object({
					name: Type.String(),
					systemName: Type.String(),
					value: Type.Object({
						options: Type.Array(Type.Unknown()),
						selectedOptions: Type.Array(Type.Unknown()),
						selectedNames: Type.Array(Type.Unknown()),
						selectedName: Type.String(),
						selectedValues: Type.Array(Type.Unknown()),
						selectedValue: Type.String(),
					}),
				}),
				Type.Object({
					name: Type.String(),
					systemName: Type.String(),
					value: Type.Object({
						options: Type.Array(
							Type.Object({
								value: Type.String(),
								name: Type.String(),
								icon: Type.String(),
								isSelected: Type.Boolean(),
								sortIndex: Type.Number(),
							})
						),
						selectedOptions: Type.Array(Type.Unknown()),
						selectedNames: Type.Array(Type.Unknown()),
						selectedName: Type.String(),
						selectedValues: Type.Array(Type.Unknown()),
						selectedValue: Type.String(),
					}),
				}),
				Type.Object({
					name: Type.String(),
					systemName: Type.String(),
					value: Type.Array(
						Type.Object({
							extension: Type.String(),
							name: Type.String(),
							path: Type.String(),
							focalX: Type.Number(),
							focalPositionFromLeft: Type.Number(),
							focalY: Type.Number(),
							focalPositionFromTop: Type.Number(),
							pathUrlEncoded: Type.String(),
						})
					),
				}),
			])
		),
		id: Type.String(),
		systemName: Type.String(),
		pageID: Type.Number(),
		paragraphID: Type.Number(),
		link: Type.String(),
	}),
	languages: Type.Array(
		Type.Object({
			culture: Type.String(),
			firstPage: Type.Object({ id: Type.Number(), name: Type.String() }),
			id: Type.Number(),
			isCurrent: Type.Boolean(),
			isMaster: Type.Boolean(),
			name: Type.String(),
			primaryDomain: Type.String(),
		})
	),
	domains: Type.Array(Type.String()).Nullable,
	primaryDomain: Type.String(),
	ecomCountryCode: Type.String(),
	ecomCurrencyCode: Type.String(),
	ecomLanguageId: Type.String(),
	ecomPricesWithVat: Type.Boolean(),
	ecomShopId: Type.String(),
});

export type GetContextQueryType = Static<typeof GetContextQuerySchema>;
export type GetContextReplyType = Static<typeof GetContextReplySchema>;
