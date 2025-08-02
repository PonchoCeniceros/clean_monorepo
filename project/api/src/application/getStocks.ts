import { getSapSession, setSapSession } from "../services/redis.connector";
import { BusinessPartner, SapApiService, SapSession, SapCredentials } from "../domain/sap";

/**
 *
 */
export default async function getStocks(credentials: SapCredentials, sapApi: SapApiService): Promise<any> {

  let session: SapSession | null = await getSapSession();

  if (!session || sapApi.isTokenExpired(session)) {
    session = await sapApi.login(credentials);
  }

  if (session) {
    const response = await sapApi.getStocks(session);

    if (response.data) {
      return null;
    }
  }

  return null;
}
