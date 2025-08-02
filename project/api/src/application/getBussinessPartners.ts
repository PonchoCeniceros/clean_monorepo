import { getSapSession, setSapSession } from "../services/redis.connector";
import { BusinessPartner, SapApiService, SapSession, SapCredentials } from "../domain/sap";

/**
 *
 */
export default async function getBussinessPartners(credentials: SapCredentials, sapApi: SapApiService): Promise<BusinessPartner[]> {

  let session: SapSession | null = await getSapSession();

  if (!session || sapApi.isTokenExpired(session)) {
    session = await sapApi.login(credentials);
  }

  if (session) {
    const response = await sapApi.getPartners(session);

    if (response.data) {
      return response.data as BusinessPartner[];
    }
  }

  return [] as BusinessPartner[];
}
