using Felvételi;
using Microsoft.Win32;
using MySqlConnector;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;


namespace Felvetelimasodik
{
    
    public partial class MainWindow : Window
    {
        ObservableCollection<IFelvetelizo> Frissit = new ObservableCollection<IFelvetelizo>();
        public MainWindow()
        {
            InitializeComponent();
            dgSzoveg.ItemsSource = Frissit;
        }

        private void btnUjDiak_Click(object sender, RoutedEventArgs e)
        {
            Diak ujDiak = new Diak();
            userAdd u = new userAdd(ujDiak);
            u.ShowDialog();

            try
            {

                Frissit.Add(new Diak(u.txtOmAzon.Text, u.txtNev.Text, u.txtEmail.Text, Convert.ToDateTime(u.txtSzulDatum.Text), u.txtertesites.Text, Convert.ToInt16(u.txtMatekJegy.Text), Convert.ToInt16(u.txtMagyar.Text)));
                u.Close();
            }
            catch (Exception)
            {
                MessageBox.Show("Valamelyik adat hibásan került átadásra vagy nem adtál meg semmit!");
            }

        }

        private void btnTorles_Click(object sender, RoutedEventArgs e)
        {
            if (dgSzoveg.SelectedItems.Count > 0)
            {
                List<IFelvetelizo> selectedItems = new List<IFelvetelizo>();

                foreach (var selectedItem in dgSzoveg.SelectedItems)
                {
                    selectedItems.Add((IFelvetelizo)selectedItem);
                }

                foreach (IFelvetelizo selectedItem in selectedItems)
                {
                    Frissit.Remove(selectedItem);
                }
            }
            else
            {
                MessageBox.Show("Jelölj ki legalább egy diákot!");
            }

        }

        private void btnImport_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog ofd = new OpenFileDialog();
            ofd.Title = "Fájlkiválasztás";
            ofd.Filter = "JSON files (*.json)|*.json|CSV files (*.csv)|*.csv";

            if (ofd.ShowDialog() == true)
            {
                try
                {
                    if (Frissit.Count > 0 && MessageBox.Show("Felülírás vagy hozzáfűzés", "", MessageBoxButton.YesNo) == MessageBoxResult.Yes)
                        Frissit.Clear();

                    if (ofd.FileName.EndsWith(".csv", StringComparison.OrdinalIgnoreCase))
                    {
                        
                        StreamReader sr = new StreamReader(ofd.FileName);
                        sr.ReadLine();
                        while (!sr.EndOfStream)
                        {
                            string[] sor = sr.ReadLine().Trim().Split(';');
                            if (sor[5] == "NULL")
                            {
                                sor[5] = "-1";
                            }
                            if (sor[6] == "NULL")
                            {
                                sor[6] = "-1";
                            }
                            Diak adat = new Diak(sor[0], sor[1], sor[2], DateTime.Parse(sor[3]), sor[4], int.Parse(sor[5]), int.Parse(sor[6]));
                            Frissit.Add(adat);
                        }
                        sr.Close();
                    }
                    else if (ofd.FileName.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
                    {
                        
                        string jsonContent = File.ReadAllText(ofd.FileName);
                        List<Diak> jsonData = JsonConvert.DeserializeObject<List<Diak>>(jsonContent);

                        
                        foreach (Diak adat in jsonData)
                        {
                            Frissit.Add(adat);
                        }
                    }
                }
                catch (Exception)
                {
                    MessageBox.Show("Ez a fájl nem betölthető");
                }
            }
        

    }

    private void btnExport_Click(object sender, RoutedEventArgs e)
        {
            SaveFileDialog sfd = new SaveFileDialog();
            sfd.Title = "Exportálás";
            sfd.Filter = "CSV fájlok (*.csv)|*.csv|JSON fájlok (*.json)|*.json";

            if (sfd.ShowDialog() == true)
            {
                string selectedFileName = sfd.FileName;
                string fileExtension = System.IO.Path.GetExtension(selectedFileName).ToLower();

                switch (fileExtension)
                {
                    case ".csv":
                        ExportToCsv(selectedFileName);
                        break;

                    case ".json":
                        ExportToJson(selectedFileName);
                        break;

                    default:
                        MessageBox.Show("Nem támogatott fájlformátum. Kérlek válassz CSV vagy JSON.");
                        break;
                }
            }
        }

        private void ExportToCsv(string fileName)
        {
            try
            {
                StreamWriter sw = new StreamWriter(fileName, append: false);
                foreach (Diak adat in Frissit)
                {
                    sw.WriteLine($"{adat.OM_Azonosito};{adat.Neve};{adat.Email};{adat.SzuletesiDatum};{adat.ErtesitesiCime};{adat.Matematika};{adat.Magyar}");
                }
                sw.Close();
                MessageBox.Show("Export sikeres!");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Hiba az adatok CSV formátumba exportálásakor: {ex.Message}");
            }
        }

        private void ExportToJson(string fileName)
        {
            try
            {
                string json = SerializeToJson(Frissit);
                File.WriteAllText(fileName, json);
                MessageBox.Show("Export sikeres!");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Hiba az adatok JSON formátumba exportálásakor: {ex.Message}");
            }
        }

        private string SerializeToJson(object data)
        {
            var options = new JsonSerializerOptions
            {
                WriteIndented = true,
                
            };

            return System.Text.Json.JsonSerializer.Serialize(data, options);
        }

        private void btnModosit_Click(object sender, RoutedEventArgs e)
        {
            if (dgSzoveg.SelectedItem != null)
            {
                Diak ujDiak = (Diak)dgSzoveg.SelectedItem;
                userAdd u = new userAdd(ujDiak, true);
                u.ShowDialog();
                dgSzoveg.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Jelölj ki egy diákot a módosításhoz!");
            }
        }


        private void btnAdatBazis_Click(object sender, RoutedEventArgs e)
        {
            string connectionString = "datasource=127.0.0.1;port=3306;username=root;password=;database=felveteli;";

            if (Frissit.Count > 0)
            {
                try
                {
                    using (MySqlConnection connection = new MySqlConnection(connectionString))
                    {
                        connection.Open();

                        // Törlés
                        using (MySqlCommand deleteCommand = new MySqlCommand("DELETE FROM adatok", connection))
                        {
                            deleteCommand.ExecuteNonQuery();
                        }

                        // Beszúrások
                        string insertQuery = "INSERT INTO adatok (OM_Azonosito, Nev, Email, Szuletesi_Datum, Ertesitesi_cim, matek_eredmeny, magyar_eredmeny) " +
                                            "VALUES (@OM_Azonosito, @Neve, @Email, @SzuletesiDatum, @ErtesitesiCime, @Matematika, @Magyar)";

                        using (MySqlCommand insertCommand = new MySqlCommand(insertQuery, connection))
                        {
                            foreach (Diak diak in Frissit)
                            {
                                insertCommand.Parameters.Clear();
                                insertCommand.Parameters.AddWithValue("@OM_Azonosito", diak.OM_Azonosito);
                                insertCommand.Parameters.AddWithValue("@Neve", diak.Neve);
                                insertCommand.Parameters.AddWithValue("@Email", diak.Email);
                                insertCommand.Parameters.AddWithValue("@SzuletesiDatum", diak.SzuletesiDatum);
                                insertCommand.Parameters.AddWithValue("@ErtesitesiCime", diak.ErtesitesiCime);
                                insertCommand.Parameters.AddWithValue("@Matematika", diak.Matematika);
                                insertCommand.Parameters.AddWithValue("@Magyar", diak.Magyar);

                                insertCommand.ExecuteNonQuery();
                            }
                        }

                        MessageBox.Show("Sikeresen fel lettek töltve az adatok az adatbázisba.");
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Hiba: {ex.Message}");
                }
            }
            else
            {
                MessageBox.Show("Nincs mit importálni!");
            }


        }
    }
}
